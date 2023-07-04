import { useState } from "react"

export const useLogin=()=>{
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const [passwordVisibility,setPasswordVisibility]=useState(false);
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  

  const login=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

  }

  return {email,setEmail,password,setPassword,passwordVisibility,setPasswordVisibility,error,loading,login};

}