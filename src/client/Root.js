import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../views/login/Login";
import App from './App'

const Root = () => (
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App tab="main"></App>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>

);

export default Root;