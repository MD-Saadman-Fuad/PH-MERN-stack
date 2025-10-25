import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    return (

        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <div className="card-body">
                <form >
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" />


                        <label className="label">Password</label>
                        <input type="password" className="input" name='password' placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>


                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                <p>New Here? <Link className='text-blue-500 hover:text-blue-800' to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;