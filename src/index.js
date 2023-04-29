import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

  const firebaseConfig = {
    apiKey: "AIzaSyCfrLQpfC0bEIDICqPxl8YZfFjaNzGxAbU",
    authDomain: "practice-ae625.firebaseapp.com",
    projectId: "practice-ae625",
    storageBucket: "practice-ae625.appspot.com",
    messagingSenderId: "674064173449",
    appId: "1:674064173449:web:9f37065fadf7e42fb1b958",
    measurementId: "G-4FR2SHBJSF"
  };


const app = initializeApp(firebaseConfig);
const database = firebase.database();
const analytics = getAnalytics(app);  

console.log(database);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
