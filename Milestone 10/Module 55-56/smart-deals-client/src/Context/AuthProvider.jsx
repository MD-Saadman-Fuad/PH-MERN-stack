import React, { useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from 'firebase/auth';
// import { signOut } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };


    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            if(currentUser){
                const loggedUser = { email: currentUser.email };
                fetch('http://localhost:3000/getToken', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('token', data.token);
                })
            }
            setLoading(false);
       })
       return () => {
        unsubscribe();
       }
    }, []);

    
    const authInfo = {
        createUser,
        signInUser,
        signInwithGoogle,
        signOutUser,
        user,
        loading,
    };

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;