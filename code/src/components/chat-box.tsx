import ChatReceiver from "./chat-receiver";
import ChatSender from "./chat-sender";
import './assets/css/chat-box.css';
import { useContext } from "react";
import { ChatContext } from "../context/chat-context";

const ChatBox = () => {
  const sender=useContext(ChatContext);
  return ( 
  <div className="chat-box">
    <ChatSender imageURL='/brokenProfilePicture.jpg' message="hello123" datetime={new Date()}/>
    <ChatReceiver imageURL='/customerProfilePicture.jpg' message="hello" datetime={new Date()}/>
    <ChatSender imageURL='/brokenProfilePicture.jpg' message="hello" datetime={new Date()}/>
    <ChatReceiver imageURL='/customerProfilePicture.jpg' message="hello" datetime={new Date()}/>
    <ChatSender imageURL='/brokenProfilePicture.jpg' message="hello" datetime={new Date()}/>
    <ChatReceiver imageURL='/customerProfilePicture.jpg' message="hello" datetime={new Date()}/>
    <ChatSender imageURL='/brokenProfilePicture.jpg' message="hello" datetime={new Date()}/>
    <ChatReceiver imageURL='/customerProfilePicture.jpg' message="hello" datetime={new Date()}/>
    <ChatSender imageURL='/brokenProfilePicture.jpg' message="hello" datetime={new Date()}/>
    <ChatReceiver imageURL='/customerProfilePicture.jpg' message="hello" datetime={new Date()}/>
    <ChatSender imageURL='/brokenProfilePicture.jpg' message="hello" datetime={new Date()}/>
    <ChatReceiver imageURL='/customerProfilePicture.jpg' message="hello" datetime={new Date()}/>
    <ChatSender imageURL='/brokenProfilePicture.jpg' message="hello" datetime={new Date()}/>
    <ChatReceiver imageURL='/customerProfilePicture.jpg' message="hello" datetime={new Date()}/>
    <ChatSender imageURL='/brokenProfilePicture.jpg' message={sender?.senderEmail} datetime={new Date()}/>
  </div> 
  );
}
 
export default ChatBox;