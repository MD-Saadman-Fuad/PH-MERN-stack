import React from 'react';
import { useState } from 'react';
const ControlledField = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted')
    }
    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if(password.length < 6){
            setError('Password must be 6 characters long');
        }else{
            setError('');
        }
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" onChange={handleEmailChange} defaultValue={email} name="email" placeholder='email'  required/>
                <br />
                <input type="password" name="password" defaultValue={password} onChange={handlePasswordChange} placeholder='password'  required/>
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;