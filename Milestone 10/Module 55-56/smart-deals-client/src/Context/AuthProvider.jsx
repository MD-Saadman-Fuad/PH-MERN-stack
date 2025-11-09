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