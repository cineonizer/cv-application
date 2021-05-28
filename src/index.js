import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from './components/Nav';
import './CSS/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
