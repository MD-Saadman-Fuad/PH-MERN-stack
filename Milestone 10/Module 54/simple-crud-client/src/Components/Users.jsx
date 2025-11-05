import React from 'react';
import { use } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'



const Users = ({ usersPromise }) => {
    const initialUsers = use(usersPromise);
    const [users, setUsers] = useState(initialUsers);
    console.log(initialUsers);
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
                if (data.insertedId) {
                    newUser._id = data.insertedId;
                    const newUsers = [...users, newUser];
                    setUsers(newUsers);
                    alert('User added successfully');
                    e.target.reset();
                }
            })
    }


    const handleDeleteUser = (id) => {
        console.log('deleting user with id:', id);
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log('deleted', data);
                if (data.deletedCount) {
                    alert('User deleted successfully');
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
                }
            })
    }


    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' id='' />
                <br />
                <input type="email" name='email' id='' />
                <br />
                <input type="submit" name='age' id='' value="Add User" />
            </form>
            <p>-----------------</p>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email}
                        <Link to={`/users/${user._id}`}>Details</Link>
                        <Link to={`/update/${user._id}`}>Update</Link>
                        <button onClick={() => handleDeleteUser(user._id)}>X</button></p>

                    )
                }

            </div>
        </div>
    );
};

export default Users;