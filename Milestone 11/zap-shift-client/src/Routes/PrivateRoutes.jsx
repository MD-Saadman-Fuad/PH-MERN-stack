import React from 'react';
import useAuth from '../hooks/useAuth';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();

    

    if (loading) {
        return <div className='w-1/2 mx-auto'>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }
    if (!user) {
        return <Navigate to="/login" />
    }
    return children;
};

export default PrivateRoutes;