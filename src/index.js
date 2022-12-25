import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//STORE -> Global state

//ACTION -> Describes what is going to be done

//REDUCERS -> The actual action that changes the state of the global store

//DISPATCH -> To invoke reducers to change the state of the global store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

