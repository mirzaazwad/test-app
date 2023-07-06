import { useState } from "react"
import { useEmailPassword } from "./useEmailPassword";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../config/firestore";

export const useLogin=()=>{
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const [passwordVisibility,setPasswordVisibility]=useState(false);
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  const {loginWithEmailAndPassword,errorEmailPassword}=useEmailPassword();

  const login=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
      loginWithEmailAndPassword(email,password);
      const document=await getDoc(doc(firestore,'users',email));
      const user=document.data();
      localStorage.setItem('user',JSON.stringify(user));
    }
    catch(err:any){
      if(err instanceof Error){
        setError(err.message);
      }
    }
    setError(errorEmailPassword);
  }

  return {email,setEmail,password,setPassword,passwordVisibility,setPasswordVisibility,error,loading,login};

}