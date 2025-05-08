import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext= createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const provider =new GoogleAuthProvider();

    const registerUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const updateUserProfile=(name,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoURL
        })
    }
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unsubscribe();
    },[]);
        

    const authData={
        user,
        setUser,
        registerUser,
        signInUser,
        googleSignIn,
        logOut,
        updateUserProfile,
        loading,
        setLoading,
    };
    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;