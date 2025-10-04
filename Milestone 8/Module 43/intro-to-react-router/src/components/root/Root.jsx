import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import './root.css';
import { useNavigation } from 'react-router-dom';
const Root = () => {
    const navigation =  useNavigation();
    const isNavigating =  Boolean(navigation.location)
    return (
        <div >
            <Header></Header>
            <div className='root-main'>
                <Sidebar></Sidebar>
                {
                    isNavigating && <span>Loading...</span>
                }
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;