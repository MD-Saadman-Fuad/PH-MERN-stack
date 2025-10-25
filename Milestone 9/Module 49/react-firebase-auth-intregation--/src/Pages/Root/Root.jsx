import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
        </div>
    );
};

export default Root;