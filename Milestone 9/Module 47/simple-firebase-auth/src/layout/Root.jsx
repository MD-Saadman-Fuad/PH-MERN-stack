import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header.jsx';
const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Root;