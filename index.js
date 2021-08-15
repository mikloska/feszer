import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from "@material-ui/core";
import App from './App'
import {Provider} from 'react-redux'
import store from './store'
import { createTheme } from '@material-ui/core/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#067e78',
    },
    // secondary: {
    //   main: green[500],
    // },
  },
});

ReactDOM.render( 
  <ThemeProvider theme={theme}>
    <Provider store = {store}>
    <App/>
    </Provider>
  </ThemeProvider>,
document.getElementById('root'));