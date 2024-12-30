import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from './Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Counter />
  </React.StrictMode>
);
