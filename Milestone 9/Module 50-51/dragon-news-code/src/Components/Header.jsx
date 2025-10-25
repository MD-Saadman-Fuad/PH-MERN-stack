import React from 'react';
import logo from "../assets/logo.png";
import { format, formatDate } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img className='w-[350px]' src={logo} alt="Logo" />
            <h1 className='text-sm text-accent'>Journalism Without Fear or Favour</h1>
            <p className='text-semibold text-accent'> {format(new Date(), "EEEE, MMMM dd, yyyy")} </p>
        </div>
    );
};

export default Header;