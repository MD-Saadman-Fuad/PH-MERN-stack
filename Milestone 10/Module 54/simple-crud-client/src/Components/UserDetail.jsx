import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetail = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            <h3>User Details</h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetail;