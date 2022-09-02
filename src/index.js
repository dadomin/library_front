import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Root from './client/Root';
import reportWebVitals from './reportWebVitals';

const rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(
  <Root/>
);

reportWebVitals();
