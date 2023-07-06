import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, firestore, provider } from "../config/firestore";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

export const useGoogleContinue=()=>{
  const [errorGoogle,setError]=useState("");
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
  .then(async(result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    const email=user?.email;
    if(email){
      localStorage.setItem('user',JSON.stringify({username: user?.displayName,
        email:user?.email,
        imageURL:user?.photoURL?user.photoURL:'customerProfilePicture.jpg'}));
      await setDoc(doc(firestore, "users", email), {
        username: user?.displayName,
        email:user?.email,
        imageURL:user?.photoURL?user.photoURL:'customerProfilePicture.jpg'
      }).catch((error)=>{
        setError(`${error.errorCode}:${error.message}`);
      })
    }
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    setError(`${errorCode}:${errorMessage}=> Sign Up with ${email} failed: ${credential}`);

  });
  }

  
  return {signInWithGoogle,errorGoogle}
}