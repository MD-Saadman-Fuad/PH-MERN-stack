import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const UserDetails = () => {
    
    const user = useLoaderData();
    console.log(user);
    const params = useParams();
    console.log(params);
    return (
        <div>
            {user.name}
        </div>
    );
};

export default UserDetails;