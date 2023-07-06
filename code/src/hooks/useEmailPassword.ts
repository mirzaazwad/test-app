import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firestore";
import { useState } from "react";
export const useEmailPassword=()=>{
  const [errorEmailPassword,setError]=useState("");
  const loginWithEmailAndPassword=(email:string,password:string)=>{
    signInWithEmailAndPassword(auth,email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(`${errorCode}:${errorMessage}`);
  });
  }

  const signUpWithEmailPassword=(email:string,password:string)=>{
    createUserWithEmailAndPassword(auth,email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(`${errorCode}:${errorMessage}`);
  });
  }
  return {loginWithEmailAndPassword,errorEmailPassword,signUpWithEmailPassword};
}