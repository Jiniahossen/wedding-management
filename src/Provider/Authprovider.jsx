import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/__firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";



export const AuthContext= createContext(null);
const auth=getAuth(app);
const googleProvider= new GoogleAuthProvider();
const githubProvider= new GithubAuthProvider()

const Authprovider = ({children}) => {

    const[user,setUser]=useState({});

    // google sihn in
    const googleSignin=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    // github sign in
    const githubSignIn=()=>{
        return signInWithPopup(auth,githubProvider)
    }

    // user create 

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // log in user

    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logged in user

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
              setUser(currentUser);
              
          })
          return ()=>{
             unSubscribe()
          }
      },[])

    //   sign out

    const signout=()=>{
       return signOut(auth);
       
    }

    const authInfo={
        googleSignin,
        githubSignIn,
        createUser,
        logIn,
        user,
        signout

    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
        
       </AuthContext.Provider>
    );
};

export default Authprovider;