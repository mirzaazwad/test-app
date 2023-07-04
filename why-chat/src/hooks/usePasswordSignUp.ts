import { useState } from "react";

export const usePasswordSignUp=()=>{
  const [passwordVisibility,setPasswordVisibility]=useState(false);
  const [confirmPasswordVisibility,setConfirmPasswordVisibility]=useState(false);
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [cfError,setCFError]=useState("");
  const [passwordError,setPasswordError]=useState("");

  const handlePasswordChange=(e:string)=>{
    setPassword(e);
    let numPresent:boolean=false;
    let upperPresent:boolean=false;
    let lowerPresent:boolean=false;
    let symbolPresent:boolean=false;
    for (const char of e) {
      if(char>='0' && char<='9'){
        numPresent=true;
      }
      else if(char>='A' && char<='Z'){
        upperPresent=true;
      }
      else if(char>='a' && char<='z'){
        lowerPresent=true;
      }
      else if(char>=" " && char<="~"){
        symbolPresent=true;
      }
    }
    if(e===""){
      setPasswordError("");
    }
    else if(e.length<8 || !numPresent || !upperPresent || !lowerPresent || !symbolPresent){
      setPasswordError("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol");
    }
    else{
      setPasswordError("");
    }
  }

  const handleConfirmPasswordChange=(e:string)=>{
    setConfirmPassword(e);
    if(password!==e && e!==""){
      setCFError("Passwords do not match");
    }
    else{
      setCFError("");
    }
  }

  return {password,handlePasswordChange,confirmPassword,handleConfirmPasswordChange,passwordError,cfError,passwordVisibility,setPasswordVisibility,confirmPasswordVisibility,setConfirmPasswordVisibility};


}