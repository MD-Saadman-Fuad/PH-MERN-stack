import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

const NAvbar = () => {
    const links = <>
        <li className='m-2 text-md hover:bg-amber-100 rounded px-2 py-1'><Link to={'/'}>Home</Link></li>
        <li className='m-2 text-md hover:bg-amber-100 rounded px-2 py-1'><Link to={'/about'}>About</Link></li>
        <li className='m-2 text-md hover:bg-amber-100 rounded px-2 py-1'><Link to={'/readlist'}>My List</Link></li>
    </>
    return (
        <div className="navbar bg-stone-100 shadow-md border-b border-amber-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-amber-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-stone-50 rounded-box z-1 mt-3 w-52 p-2 shadow-lg border border-amber-200">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl font-serif font-bold text-stone-800 hover:bg-amber-200">Boi Poka</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end mr-3 md:mr-7">
                <a className="btn btn-outline btn-primary p-3 hover:bg-amber-600" href='https://github.com/MD-Saadman-Fuad' target="_blank" rel="noopener noreferrer"><FaGithub /> Contribute</a>
            </div>
        </div>
    );
};

export default NAvbar;