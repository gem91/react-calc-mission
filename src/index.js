import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Calculator 만들기</h1>
    <Calculator />
  </React.StrictMode>
);
