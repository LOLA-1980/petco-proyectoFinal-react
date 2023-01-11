import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHtlbc75rqiNj2KFQL7TKho4PD7CyNkmY",
  authDomain: "react-petco-hernandez.firebaseapp.com",
  projectId: "react-petco-hernandez",
  storageBucket: "react-petco-hernandez.appspot.com",
  messagingSenderId: "168116478466",
  appId: "1:168116478466:web:9d6302f259652aad697d1b"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);

