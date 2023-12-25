import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Todo from './Todo';
import Coin from './Coin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <br/>
    <Todo />
    <br/>
    <Coin />
  </div>
);
