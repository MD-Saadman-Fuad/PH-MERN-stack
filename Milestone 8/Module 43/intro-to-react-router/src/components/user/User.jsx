import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Suspense } from 'react';
import UserDetails2 from '../UserDetails2/UserDetails2';
import { useLocation } from 'react-router-dom';
const User = ({user}) => {
    const [showInfo, setShowInfo] =  useState(false);
    const [visitHome, setVisitHome] = useState(false);
    const location = useLocation();
    console.log(location);
    const {name, email, phone} = user;

    const usersPromise = fetch (`https://jsonplaceholder.typicode.com/users/${user.id}`).then(res => res.json());
    const userStyle = {
        border: '1px solid gray',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
    }
    if (visitHome){
        return <Navigate to='/'></Navigate>
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${user.id}`}>Show Details</Link>


            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'} Info</button>


            {
                showInfo && <Suspense fallback = {<div>Loading...</div>}>
                    <UserDetails2 usersPromise={usersPromise}></UserDetails2>
                </Suspense>
            }
            <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;