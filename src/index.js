import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { UserContextProvider, TagContextProvider } from './context';
import { BlogContextProvider } from './context/BlogContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <TagContextProvider>
        <BlogContextProvider>
          <App />
        </BlogContextProvider>
      </TagContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);