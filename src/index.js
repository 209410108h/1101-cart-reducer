import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App_08 from './App_08';
import { AppProvider_08 } from './context_08';
ReactDOM.render(
  <React.StrictMode>
    <AppProvider_08>
      <App_08 />
    </AppProvider_08>
  </React.StrictMode>,
  document.getElementById('root')
);
