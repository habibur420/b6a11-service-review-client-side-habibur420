import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // auth provider 
    const gooogleProvider = new GoogleAuthProvider()


    // login with google 
    const loginGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, gooogleProvider);
    }

// create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login 
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // updata user profile 
    const updataUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        })
    }

    // logout 
    const logOut =() =>{
        return signOut(auth)
    }



    // onAuthStateChanged 
    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            console.log(currentuser);
            setLoading(false)
        });
        return () => [
            unSuscribe()
        ]
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        login,
        updataUserProfile,
        logOut,
        loginGoogle,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;