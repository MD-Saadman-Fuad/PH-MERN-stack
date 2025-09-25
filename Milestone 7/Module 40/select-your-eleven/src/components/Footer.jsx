import React from 'react';
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <div className='bg-[#06091A] text-center mx-auto p-4 mt-8'>
            {/* Logo Section */}
            <div className="flex justify-center mb-4">
                <img className='w-[80px] h-[80px]' src={logo} alt="logo" />
            </div>

            {/* Footer Content */}
            <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-white max-w-[1200px] mx-auto'>
                <div>
                    <h1 className='text-lg font-semibold'>About Us</h1>
                    <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div>
                    <h1 className='text-lg font-semibold'>Quick Links</h1>
                    <ul className='m-4 text-gray-500'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-semibold'>Subscribe</h1>
                    <p className='m-4'>Subscribe to our newsletter for the latest updates.</p>
                    <div className="join w-full justify-center">
                        <div>
                            <label className="input validator join-item">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" placeholder="mail@site.com" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        <button className="btn btn-neutral join-item">Join</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;