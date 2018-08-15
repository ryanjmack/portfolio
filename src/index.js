import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './components/styles.css';

// add classes to the body and html element for basic styling
document.body.classList.add('body');
document.querySelector('html').classList.add('html');

ReactDOM.render(
  <App display='home'/>,
  document.getElementById('root')
);
