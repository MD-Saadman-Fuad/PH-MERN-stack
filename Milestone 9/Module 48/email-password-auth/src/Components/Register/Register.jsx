import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React from 'react';
import { auth } from '../../Firebase/Firebase.config';
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router';
const Register = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        console.log('clicked');
        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;
        const name = event.target.name.value;
        const photourl = event.target.photourl.value;
        console.log(name, photourl, email, password, terms);

        const lengthPattern = /^.{6,}$/;
        const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        const specialCharPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;
        if (!lengthPattern.test(password)) {
            setError('Password must be at least 6 characters long.');
            return;
        } else if (!casePattern.test(password)) {
            setError('Password must contain at least one uppercase and one lowercase letter.');
            return;
        } else if (!specialCharPattern.test(password)) {
            setError('Password must contain at least one special character.');
            return;
        }

        setError('');
        setSuccess(false);

        if (!terms) {
            setError('Please accept the terms and conditions.');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
                setSuccess(true);
                event.target.reset();

                const profile = {
                    displayName: name,
                    photoURL: photourl
                }
                updateProfile(result.user, profile)
                    .then(() => {
                        console.log('User profile updated successfully.');

                    })
                    .catch(error => {
                        console.error('Error updating user profile:', error);
                    });

                sendEmailVerification(result.user).then(() => {
                    alert('Verification email sent. Please check your inbox.');
                });
            })

            .catch(error => {
                console.error('error:', error);
                setError(error.message);
            })
    }

    const handleTogglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input" name="name" placeholder="Name" />
                                <label className="label">Photo URL</label>
                                <input type="text" className="input" name="photourl" placeholder="Photo URL" />
                                <label className="label">Email</label>
                                <input type="email" className="input" name="email" placeholder="Email" />
                                <label className="label">Password</label>

                                <div>
                                    <input type={showPassword ? 'text' : 'password'} className="input" name="password" placeholder="Password" />
                                    <button onClick={handleTogglePassword} className="btn btn-xs absolute top-67 right-8">{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                                </div>
                                <label className="label">
                                    <input type="checkbox" name='terms' className="checkbox" />
                                    Accept our terms and conditions
                                </label>

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                            {
                                success && <p className="text-center text-green-600 mt-2">Account created successfully!</p>
                            }
                            {
                                error && <p className="text-center text-red-600 mt-2">{error}</p>
                            }
                        </form>
                        <p>Already have an Account? <Link className="link text-blue-400" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;