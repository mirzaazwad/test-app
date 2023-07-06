import { useState } from "react"
import { useEmailPassword } from "./useEmailPassword";

export const useLogin=()=>{
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const [passwordVisibility,setPasswordVisibility]=useState(false);
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  const {signInWithEmailAndPassword,errorEmailPassword}=useEmailPassword();
  

  const login=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
      signInWithEmailAndPassword(email,password);
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