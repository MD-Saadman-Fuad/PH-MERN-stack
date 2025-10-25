import React from 'react';
import { NavLink } from 'react-router-dom';
import userPNG from '../assets/user.png';
import { Link } from 'react-router-dom';
import Authprovider, { AuthContext } from '../provider/Authprovider';
import { HiH1 } from 'react-icons/hi2';
import { use } from 'react';

const Navbar = () => {
    const { user, logout } = use(AuthContext)
    const handleLogout = () => {
        // Handle logout logic here
        logout().then(() => {
            alert("Logout successful");
        }).catch((error) => {
            // An error happened
            console.error("Logout Error: ", error);
        });
    }
    return (
        <div className='flex justify-between items-center p-6'>


            <div className=''>
                {user && user.email}
            </div>
            <div className='nav gap-3 flex text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login-btn flex gap-2'>
                <img className='w-12 rounded-full' src={`${user ? user.photoURL : userPNG}`} alt="" />
                {
                    user ? <button onClick={handleLogout} className='btn btn-primary'>Log Out</button> : <Link to="/auth/login" className='btn btn-primary'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;