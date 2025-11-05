import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const user = useLoaderData();
    console.log(user);

    const handleUpdateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = { name, email };
        console.log(updatedUser);
        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('updated', data);
                if (data.modifiedCount) {
                    alert('User updated successfully');
                }
            })
    }


    return (
        <div>
            <h2>Update a User</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" defaultValue={user.name} />
                <br />
                <input type="email" name="email" defaultValue={user.email} />
                <br />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default UpdateUser;