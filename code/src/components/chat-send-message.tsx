import { useContext, useState } from "react";
import { Send } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { IonIcon } from "@ionic/react";
import { sendSharp } from "ionicons/icons";
import './assets/css/send-message.css';
import { useSendMessage } from "../hooks/useSendMessage";
import { ChatContext } from "../context/chat-context";
import { UserContext } from "../context/user-context";



const SendMessageChatRoom = () => {
  const sender=useContext(ChatContext);
  const user=useContext(UserContext);
  const str=localStorage.getItem('user');
  let dummyUser=null;
  if(str){
    dummyUser=JSON.parse(str);
  }
  else{
    dummyUser={
      imageURL:'/customerProfilePicture.jpg'
    }
  }
  const {formValue,setFormValue,sendMessage}=useSendMessage(user?.email,sender?.senderEmail,dummyUser.imageURL,sender?.senderImageURL);
  if(user && user?.email!==""){
    return (
      <form
        className="d-flex message"
        onSubmit={sendMessage}
      >
        <img
          src={user?.photoURL?user.photoURL:"/customerProfilePicture.jpg"}
          alt="avatar 3"
          className="chatSenderImage"
        />
        <div className="input-group">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Type message"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          disabled={sender?.senderEmail===""}
        />
        <button style={{backgroundColor:formValue===""?"var(--customMagenta)":"var(--customDarkBlue)",color:"whitesmoke",width:'10%'}} disabled={formValue===""}><IonIcon icon={sendSharp}></IonIcon></button>
        </div>
      </form>
    );
  }
};

export default SendMessageChatRoom;