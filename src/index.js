import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './components/contex/AuthContext';
import { ChatContextProvider } from './components/contex/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChatContextProvider>
  </AuthContextProvider>,
);
