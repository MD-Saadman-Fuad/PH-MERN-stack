import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto py-4 bg-base-200 min-h-screen'>
            <header className='bg-base-200'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;