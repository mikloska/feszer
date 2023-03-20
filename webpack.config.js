const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack")

const dotenv = require("dotenv");
const fs = require("fs");
/**
 * Code to get the values of environment variables during compilation time for the front-end
 */
//Get the root path. Our .env files and webpack.config.babel.js files are in the root path
const currentPath = path.join(__dirname);
const basePath = currentPath + "/.env";
// We're concatenating the environment name to our filename to specify the correct env file!
const envPath = basePath + "." + process.env.NODE_ENV;
// Check if the file exists, otherwise fall back to the production .env
const finalPath = fs.existsSync(envPath) ? envPath : basePath;
// Set the path parameter in the dotenv config
const fileEnv = dotenv.config({ path: finalPath }).parsed;
// reduce it to a nice object, the same as before
const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
  return prev;
}, {});

module.exports = {
  mode: 'development',
  entry : ['babel-polyfill','./client/index.js'],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    //clean: true,
  },

  plugins: [
    new webpack.DefinePlugin(envKeys),
    new HtmlWebpackPlugin({
      inject: false,
      title: 'Feszer Band',
      template: './client/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: { "fs": false, "os" : false, "path" : false }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
       exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] 
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],

      },
      
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      loader: 'file-loader',
      options: {
        name: 'images/[name].[ext]'
      }
    },
    ]
  },
  devServer: {
    //This is needed to allow entry into app from places other than the root
    historyApiFallback: true,
    //Having '/build/' in puclicPath, was the reason I had to keep changing the src tag in the root index.html.
    publicPath: '/',
    // proxy: {
    //   '/api': 'http://localhost:5000',
    // },
  },


}