import ChatReceiver from "./chat-receiver";
import ChatSender from "./chat-sender";
import './assets/css/chat-box.css';
import { useContext } from "react";
import { ChatContext } from "../context/chat-context";

const ChatBox = () => {
  const sender=useContext(ChatContext);
  const messages=sender?.messages;
  return ( 
  <div className="chat-box">
    {messages?.map((message)=>(
      message.from===sender?.senderEmail?<ChatSender imageURL={message?.receiverImageURL?message.receiverImageURL:'/customerProfilePicture.jpg'} message={message.messages} datetime={message.createdAt}/>:<ChatReceiver imageURL={message?.senderImageURL!==""?message.senderImageURL:'/customerProfilePicture.jpg'}  message={message.messages} datetime={message.createdAt}/>
    ))}
  </div> 
  );
}
 
export default ChatBox;