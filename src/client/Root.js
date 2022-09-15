import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logout from "../action/logout/Logout";
import Login from "../views/login/Login";
import App from './App'

const Root = () => {


    return (
        <BrowserRouter>
            <Routes>
                {/* main */}
                <Route path="/" element={<App tab="main"></App>}></Route>

                {/* login & logout */}
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/logout" element={<Logout></Logout>}></Route>

                {/* library request */}
                <Route path="/lib/python/req" element={<App tab="pythonReq"></App>}></Route>
                <Route path="/lib/java/req" element={<App tab="javaReq"></App>}></Route>

                {/* library list */}
                <Route path="/lib/python/list" element={<App tab="pythonList"></App>}></Route>
                <Route path="/lib/java/list" element={<App tab="javaList"></App>}></Route>

                {/* type change event */}
                <Route path="/change/admin" element={<App tab="changeAdmin"></App>}></Route>
                <Route path="/change/user" element={<App tab="changeUser"></App>}></Route>

            </Routes>
        </BrowserRouter>
    )

};

export default Root;