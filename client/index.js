import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const container = document.getElementById('root');
const root = createRoot(container)

const theme = createTheme({
  palette: {
    primary: {
      main: '#bc0813',
    },
  },
});

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>
);


