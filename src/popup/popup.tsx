import React from 'react';
import ReactDOM from 'react-dom/client';
import './popup.css';

const test = <img src="icon.png" />

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
const root = ReactDOM.createRoot(rootElement);
root.render(test); 
