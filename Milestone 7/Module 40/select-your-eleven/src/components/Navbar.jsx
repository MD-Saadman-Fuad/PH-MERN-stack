import React from 'react';
import navLogo from '../assets/logo.png'
import coinLogo from '../assets/Currency.png'
import '../App.css'
import '../index.css'
const Navbar = ({ availableBalance }) => {
    return (
        <div>
            <div className="navbar max-w-[1200px] mx-auto">
                <div className="flex-1">
                    <a className="text-xl">
                        <img className='w-[60px] h-[60px]' src={navLogo} alt="" />
                    </a>
                </div>
                <div className="flex gap-4 text-gray-500">
                    <button>Home</button>
                    <button>Fixture</button>
                    <button>Teams</button>
                    <button>Schedules</button>
                    <button className='btn flex gap-0'>
                        <span className='mr-2'>{availableBalance}</span>
                        <span className='mr-2'> Coin</span>
                        <img src={coinLogo} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;