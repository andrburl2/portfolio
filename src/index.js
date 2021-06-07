import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';
import './index.css';

const timrndr = new Date();

ReactDOM.render(
  <App />,
  document.querySelector('.root')
);

console.log(Math.round((new Date() - timrndr)/60));