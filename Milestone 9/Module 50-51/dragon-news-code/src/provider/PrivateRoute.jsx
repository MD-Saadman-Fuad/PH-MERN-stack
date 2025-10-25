import React from 'react';
import { AuthContext } from './Authprovider';
import { use } from 'react';
import { Navigate } from 'react-router';
import Loading from '../Page/Loading';
import { useLocation } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>;
    }

    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRoute;