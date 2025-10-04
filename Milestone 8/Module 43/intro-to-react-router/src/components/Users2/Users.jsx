import React from 'react';
import { use } from 'react';
const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users);
    return (
        <div>
            <h1>This is Users2 page</h1>
        </div>
    );
};

export default Users;
