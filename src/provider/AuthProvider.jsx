import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app, provider } from '../firebase/firebase.config';

export const AuthContext= createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    const registerUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const updateUserProfile=(name,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoURL
        })
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleSignIn=()=>{
        return signInWithPopup(auth,provider);
    }
    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
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
        updateUserProfile
    };
    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;