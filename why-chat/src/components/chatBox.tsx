import ChatReceiver from "./chatsReceiverMessage";
import ChatSender from "./chatsSenderMessage";
import './assets/css/chat-box.css';

const ChatBox = () => {
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
    <ChatSender imageURL='/brokenProfilePicture.jpg' message="hello" datetime={new Date()}/>
  </div> 
  );
}
 
export default ChatBox;