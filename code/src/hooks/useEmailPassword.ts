import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../context/firestore";
import { useState } from "react";
export const useEmailPassword=()=>{
  const [errorEmailPassword,setError]=useState("");
  const signInWithEmailAndPassword=(email:string,password:string)=>{
    createUserWithEmailAndPassword(auth, email, password)
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
  return {signInWithEmailAndPassword,errorEmailPassword};
}