import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import LoginForm from '../src/LoginPage/loginpage';
import ListProduct from './comp/listProduct'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/Product" element={<ListProduct/>}/>
      <Route path="/Login" element={<LoginForm />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


