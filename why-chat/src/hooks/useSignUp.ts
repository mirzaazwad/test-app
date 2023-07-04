import { useState } from "react"

export const useSignUp=(password:string,confirmPassword:string)=>{
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  
  const [dob,setDOB]=useState<Date>();
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  const [disabled,setDisabled]=useState<boolean>(password!==confirmPassword);
  

  const signup=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

  }

  return {email,setEmail,username,setUsername,dob,setDOB,signup,error,loading,disabled};

}