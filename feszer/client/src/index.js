import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App'


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