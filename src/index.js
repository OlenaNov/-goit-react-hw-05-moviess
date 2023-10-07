import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} ></ThemeProvider>
    <BrowserRouter basename="/goit-react-hw-05-movies">
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
