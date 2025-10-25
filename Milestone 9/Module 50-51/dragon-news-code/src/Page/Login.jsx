import React from 'react';
import { Link } from 'react-router-dom';
import { use } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
    const [error, setError] = useState('');
    const { signin } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signin(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                form.reset();
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch(error => {
                const errorCode = error.code
                // console.log(error.message);
                // alert("Login failed: " + error.message);
                setError(errorCode)
            })
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-semibold text-2xl'>Login Your account</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        {/* password   */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        <div className='text-left'><a className="link link-hover">Forgot password?</a></div>
                        {
                            error &&
                            <p className='text-red-600 text-sm'>Login failed: {error}</p>
                        }
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <h1 className='pt-5'>Don't have an account? <Link className="text-secondary" to="/auth/register">Register?</Link></h1>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;