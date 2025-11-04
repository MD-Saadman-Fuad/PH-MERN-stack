import React from 'react';
import { use } from 'react';
import { useState } from 'react';
const Users = ({ usersPromise }) => {
    const initialUsers = use(usersPromise);
    console.log(initialUsers);
    const [users, setUsers] = useState(initialUsers);
    const handleAddUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email };
        console.log(newUser);
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('sent', data);
                const newUsers = [...users, data];
                setUsers(newUsers);
                e.target.reset();
            })
    }
    return (
        <div>
            <div>
                <h3>Add Users</h3>
                <form onSubmit={handleAddUser}>
                    <input type="text" name='name' />
                    <br />
                    <input type="email" className="email" name='email' />
                    <br />
                    <button type="submit">Add User</button>
                </form>
            </div>
            <div>
                {
                    users.map(user => <p key={user.id}>{user.name} : {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;