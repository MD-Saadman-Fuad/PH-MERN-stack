import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.config';
import { useState } from 'react';
const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const emailRef = useRef();
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        setError('');
        setSuccess(false);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                if (!result.user.emailVerified) {
                    alert('Please verify your email before logging in.');
                }
                setSuccess(true);

            })
            .catch(error => {
                console.error('error:', error);
                setError(error.message);
            });

    }

    const handleForgetPassword = () => {
        console.log('forgot password clicked', emailRef.current.value);
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset email sent. Please check your inbox.');
            })
            .catch(error => {
                console.error('error:', error);
                setError(error.message);
            });
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col border rounded-3xl shadow-lg p-8 ">
                <h1 className='text-4xl font-bold'>Login</h1>
                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email"
                            ref={emailRef}
                        />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                {
                    error && <p className="text-center text-red-600 mt-2">{error}</p>
                }
                {
                    success && <p className="text-center text-green-600 mt-2">User logged in successfully!</p>
                }
                <p>Don't have an Account? <Link className="link text-blue-400" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;