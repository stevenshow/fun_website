import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TopBar from './TopBar';

ReactDOM.render(
  <React.StrictMode>
    <TopBar/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
