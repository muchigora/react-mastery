import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// const header = <h1>This is my first React App</h1>

// console.log(header);
// ReactDOM.render(header, document.querySelectorAll('#root'));

const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);