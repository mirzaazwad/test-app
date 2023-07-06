import { useState } from "react";
import Login from "../components/login";
import SignUp from "../components/signup";
import Navbar from "../components/navbar";

const Landing = () => {
  const [currentState,setCurrentState]=useState('login');
  return ( 
  <div className="landing">
    <Navbar page="landing"/>
    {currentState==='login'?<Login changeState={setCurrentState}/>:<SignUp changeState={setCurrentState}/>}
  </div> 
  );
}
 
export default Landing;