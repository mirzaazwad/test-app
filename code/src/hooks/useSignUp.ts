import { doc, setDoc } from "firebase/firestore";
import { useState } from "react"
import { firestore } from "../context/firestore";
import { useEmailPassword } from "./useEmailPassword";

export const useSignUp=(password:string,confirmPassword:string,imageURL:string|undefined)=>{
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  
  const [dob,setDOB]=useState<Date>();
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  const [disabled,setDisabled]=useState<boolean>(password!==confirmPassword);
  const {signInWithEmailAndPassword,errorEmailPassword}=useEmailPassword();
  

  const signup=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    await setDoc(doc(firestore, "users", email), {
      username: username,
      email:email,
      password:password,
      dob:dob,
      imageURL:imageURL?imageURL:'customerProfilePicture.jpg'
    }).catch((error)=>{
      setError(`${error.errorCode}:${error.message}`);
    })
    if(error!==""){
      return;
    }
    signInWithEmailAndPassword(email,password);
    setError(errorEmailPassword);
  }

  return {email,setEmail,username,setUsername,dob,setDOB,signup,error,loading,disabled};

}