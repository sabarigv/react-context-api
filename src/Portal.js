import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from './Dashboard';
import User from './User';
import Product from './Product';
import Createuser from './Createuser';
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";


function Portal() {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    <div class="container-fluid">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portal