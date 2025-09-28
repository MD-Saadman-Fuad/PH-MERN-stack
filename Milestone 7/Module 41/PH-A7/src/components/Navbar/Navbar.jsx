import React from 'react';

const Navbar = () => {
    return (
        <div className='w-full shadow-md bg-white'>
            <div className='  max-w-[1440px] mx-auto flex justify-between items-center p-4 bg-white text-black'>
                <h1 className='text-2xl font-bold'>CS — Ticket System</h1>
                <div class="dropdown pr-10 md:hidden">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Homepage</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>ChangeLog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                        <li><a>About</a></li>
                        <button
                        className='p-1 pl-2 text-left text-white font-bold'
                        style={{
                            borderRadius: '4px',
                            background: 'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)'
                        }}
                    >
                        + New Ticket
                    </button>
                    </ul>
                    
                </div>
                <div className='hidden md:flex-row md:flex gap-4'>
                    <button className=' text-md'>Home</button>
                    <button className=' text-md'>FAQ</button>
                    <button className=' text-md'>ChangeLog</button>
                    <button className=' text-md'>Blog</button>
                    <button className=' text-md'>Download</button>
                    <button className=' text-md'>Contact</button>
                    <button
                        className='btn  text-white font-bold'
                        style={{
                            borderRadius: '4px',
                            background: 'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)'
                        }}
                    >
                        + New Ticket
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;