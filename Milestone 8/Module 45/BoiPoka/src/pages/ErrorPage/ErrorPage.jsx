import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-amber-50 flex items-center justify-center p-6">
            <div className="text-center bg-white rounded-lg shadow-lg border border-amber-200 p-12 max-w-md">
                <h1 className="text-6xl font-serif font-bold text-stone-800 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-stone-700 mb-4">Page Not Found</h2>
                <p className="text-stone-600 mb-8">
                    Oops! The page you're looking for doesn't exist. It might have been moved or you entered the wrong URL.
                </p>
                <p className='font-semibold text-xl pb-2 text-stone-700'>But Sometimes Reloading Can Also help you :))</p>
                <p className='font-bold text-2xl pb-3 text-stone-700'>REACT BUG LOL</p>
                <Link to="/" className="btn btn-primary bg-amber-600 hover:bg-amber-700 border-0 px-6 py-3 text-lg font-semibold shadow-lg">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;