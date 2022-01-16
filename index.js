import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from "@material-ui/core";
import App from './App'
import { createTheme } from '@material-ui/core/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#bc0813',
    },
  },
});

ReactDOM.render( 
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>,
document.getElementById('root'));