import React from 'react';
import { Link } from 'react-router-dom';
import { use } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [nameError, setNameError] = useState('');
    const [photoError, setPhotoError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (event) => {

        event.preventDefault();
        // Handle registration logic here
        const form = event.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError('Name must be at least 5 characters long');
            return;
        } else {
            setNameError('');
        }

        const photo = form.photo.value;
        if (photo.length < 5) {
            setPhotoError('Name must be at least 5 characters long');
            return;
        } else {
            setPhotoError('');
        }
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    console.log("User profile updated");
                    setUser({ ...createdUser, displayName: name, photoURL: photo });
                    navigate('/');
                })
                    .catch(error => {
                        console.log("Profile update error: ", error.message);
                        setUser(createdUser);
                    });

            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-semibold text-2xl'>Register Your account</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />
                        {nameError && <p className='text-red-600 text-sm'>{nameError}</p>}
                        {/*Photo Url */}
                        <label className="label">Photo Url</label>
                        <input type="text" name='photo' className="input" placeholder="Proto Url" required />
                        {photoError && <p className='text-red-600 text-sm'>{photoError}</p>}
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="text" name='email' className="input" placeholder="Email" required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        {/* <div className='text-left'><a className="link link-hover">Forgot password?</a></div> */}

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <h1 className='pt-5'>Already Have an account? <Link className="text-secondary" to="/auth/login">login?</Link></h1>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;