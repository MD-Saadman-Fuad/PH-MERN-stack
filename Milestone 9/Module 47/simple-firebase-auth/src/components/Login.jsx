import React from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config.js';
import { useState } from 'react';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
githubProvider.addScope('user:email');

const Login = () => {
    const [user, setUser] = useState(null);
    const handleGoogleSignIn = () => {
        // Logic for Google Sign-In will go here
        console.log('Google Sign-In clicked');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log('error:', error);
            })
    }

    const handleGithubSignIn = () => {
        // Logic for GitHub Sign-In will go here
        console.log('GitHub Sign-In clicked');
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
                // setUser(result.user);
                const loggedInUser = result.user;
                if (!loggedInUser.email) {
                    if (loggedInUser.providerData) {
                        const gitProvider = loggedInUser
                            .providerData.find(p => p.providerId === 'github.com');
                        if (gitProvider && gitProvider.email) {
                            loggedInUser.email = gitProvider.email;
                        }
                    }
                }
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error:', error);
            })
    }

    const handleSignOut = () => {
        // Logic for Sign-Out will go here
        console.log('Sign Out clicked');
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch(error => {
                console.log('error:', error);
            })
    }

    return (
        <div>
            <h1>Please Log In</h1>
            {/* <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}
            {
                user ? <button onClick={handleSignOut}>Sign Out</button> :
                    <><button onClick={handleGoogleSignIn}>Sign in with Google</button>
                        <button onClick={handleGithubSignIn}>Sign In with Github</button></>
            }

            {/* <h3>{user?.displayName}</h3>
            <h5>{user?.email}</h5> */}

            {
                user && (
                    <div>
                        <h3>Name: {user.displayName}</h3>
                        <h5>Email: {user.email}</h5>
                        <img src={user.photoURL} alt="User Profile" />
                    </div>
                )
            }
        </div>
    );
};

export default Login;