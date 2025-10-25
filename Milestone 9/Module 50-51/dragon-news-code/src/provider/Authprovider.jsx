import React, { createContext, useEffect } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export const AuthContext = createContext();
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            // Cleanup subscription
            unsubscribe();
        }
    }, []);
    const authData = {
        user,
        setUser,
        createUser,
        logout,
        signin,
        loading,
        setLoading,
        updateUser,
    }
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default Authprovider;