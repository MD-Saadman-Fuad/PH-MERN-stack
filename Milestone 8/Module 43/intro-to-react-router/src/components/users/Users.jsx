import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../user/User';
const Users = () => {

    const users = useLoaderData();
    console.log(users);

    return (
        <div>
            <h1>This is Users page</h1>
            <div>
                {
                    users.map(user => <User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};



export default Users;