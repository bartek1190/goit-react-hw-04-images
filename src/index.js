import React from 'react';
import ReactDOM from 'react-dom/client';
import { ImagesProvider } from 'components/ImagesContext/ImagesContext';
import './index.css';
import { App } from 'App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImagesProvider>
      <App />
    </ImagesProvider>
  </React.StrictMode>
);
