import React from 'react';
import navLogo from '../assets/logo.png'
import coinLogo from '../assets/Currency.png'
import '../App.css'
import '../index.css'
const Navbar = () => {
    return (
        <div>
            <div className="navbar max-w-[1200px] mx-auto">
                <div className="flex-1">
                    <a className="text-xl">
                        <img className='w-[60px] h-[60px]' src={navLogo} alt="" />
                    </a>
                </div>
                <div className="flex">
                    <span className='mr-2'>6000000000</span>
                    <span className='mr-2'> Coin</span>
                    <img src={coinLogo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;