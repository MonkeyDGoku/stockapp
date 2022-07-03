import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./styles/globals.css"
import App from './App';
import darkTheme from './styles/themes/darkTheme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme>

        <App />
      </CssBaseline>

    </ThemeProvider>
  </React.StrictMode>
);

