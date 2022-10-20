import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { GlobalStyle } from 'utils/GlobalStyle';
import { AuthContextProvider } from './authContext/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
