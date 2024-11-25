import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { UserContextProvider, TagContextProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <TagContextProvider>
        <App />
      </TagContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);


