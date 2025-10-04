import React from 'react';
import { use } from 'react';
const UserDetails2 = ({usersPromise}) => {
    const user =  use(usersPromise);
    return (
        <div>
            <h2>User Details</h2>
            {user && (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            )}
        </div>
    );
};

export default UserDetails2;