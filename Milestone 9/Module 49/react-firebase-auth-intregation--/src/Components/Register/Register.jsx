import React, { use } from 'react';
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config.js';
import { AuthContext } from '../../contexts/AuthContext/AuthContext.jsx';

const Register = () => {

    const { createUser } = use(AuthContext);
    const handleRegister = (event) => {
        event.preventDefault();
        // Registration logic will go here
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })

    }

    // const handleRegister = (event) => {
    //     event.preventDefault();
    //     // Registration logic will go here

    //     const name = event.target.name.value;
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;

    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser);
    //         })
    //         .catch(error => {
    //             console.log('error', error.message);
    //         });
    // }
    return (


        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl text-center font-bold">Register now!</h1>
            <div className="card-body">
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" name='name' placeholder="Name" />

                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" />


                        <label className="label">Password</label>
                        <input type="password" className="input" name='password' placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>


                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
                <p>already Have an Account? <Link className='text-blue-500 hover:text-blue-800' to="/login">Login</Link></p>
            </div>
        </div>

    );
};

export default Register;