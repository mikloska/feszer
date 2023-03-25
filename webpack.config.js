const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry : ['babel-polyfill','./client/index.js'],
  devtool: 'inline-source-map',
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/',
    //clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      // inject: false,
      title: 'Feszer Band',
      template: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    // fallback: { "fs": false, "os" : false, "path" : false }
  },
  mode: process.env.NODE_ENV,
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
    publicPath: '/build/',
    //Having '/build/' in puclicPath, was the reason I had to keep changing the src tag in the root index.html.
    publicPath: '/',
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },


}