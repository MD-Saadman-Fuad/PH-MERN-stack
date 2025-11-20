import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import RouteTitle from '../../components/RouteTitle/RouteTitle';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <RouteTitle />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;