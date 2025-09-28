import React from 'react';
import facebookIcon from '../../assets/icons/facebook.png';
import twitterIcon from '../../assets/icons/twitter.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import instagramIcon from '../.././assets/icons/mail.png';
const Footer = () => {
    return (
        <div className=' bg-black text-white text-center'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-10 p-4 mb-10 mx-auto'>
                <div className='p-4'>
                    <h1 className='font-bold text-xl mb-4'>CS — Ticket System</h1>
                    <p className='text-sm text-gray-400'>
                        This is a ticket system for customer support.
                        this is to make peoples life easier and have a smooth transition of ticket conflict and problems
                    
                    </p>
                </div>
                <div className='p-4'>
                    <h1 className='font-bold text-lg mb-4'>Company</h1>
                    <h4 className='text-sm text-gray-400 mt-4'>About Us</h4>
                    <h4 className='text-sm text-gray-400 mt-4'>Our Mission</h4>
                    <h4 className='text-sm text-gray-400 mt-4'>Contact Us</h4>
                </div>
                <div className='p-4'>
                    <h1 className='font-bold text-lg mb-4'>Services</h1>
                    <h4 className='text-sm text-gray-400 mt-4'>Production and Services</h4>
                    <h4 className='text-sm text-gray-400 mt-4'>Customer Stories</h4>
                    <h4 className='text-sm text-gray-400 mt-4'>Download App</h4>
                </div>
                <div className='p-4'>
                    <h1 className='font-bold text-lg mb-4'>Information</h1>
                    <h4 className='text-sm text-gray-400 mt-4'>Privacy Policy</h4>
                    <h4 className='text-sm text-gray-400 mt-4'>Terms of Service</h4>
                    <h4 className='text-sm text-gray-400 mt-4'>Join Us</h4>
                </div>
                <div className='p-4'>
                    <h1 className='font-bold text-lg mb-4'>Social Links</h1>
                    <h4 className='text-sm text-gray-400 mt-4'><img className='inline-block mr-2 w-[20px]' src={facebookIcon} alt="Facebook" />Facebook</h4>
                    <h4 className='text-sm text-gray-400 mt-4'><img className='inline-block mr-2 w-[20px]' src={twitterIcon} alt="Twitter" />Twitter</h4>
                    <h4 className='text-sm text-gray-400 mt-4'><img className='inline-block mr-2 w-[20px]' src={linkedinIcon} alt="LinkedIn" />LinkedIn</h4>
                    <h4 className='text-sm text-gray-400 mt-4'><img className='inline-block mr-2 w-[20px]' src={instagramIcon} alt="Instagram" />Mail</h4>
                </div>
            </div>
            <div className='border-t-1 border-gray-700 p-4'>
                <h1 className='text-center font-bold text-md'>© 2025 CS — Ticket System. All rights reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;