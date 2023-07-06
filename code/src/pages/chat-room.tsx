import ChatTile from "../components/chat-tile";
import '../components/assets/css/chat-page.css';
import '../components/assets/css/chat.css';
import ChatBox from "../components/chat-box";
import SendMessageChatRoom from "../components/chat-send-message";
import Navbar from "../components/navbar";
import { useChatSender } from "../hooks/useChatSender";
import { ChatContext } from "../context/chat-context";



const ChatPharmacy = () => {
  const {senderEmail,messages,setSenderEmail}=useChatSender();
  return ( 
  <ChatContext.Provider value={{senderEmail:senderEmail,setSenderEmail:setSenderEmail,messages}}>
    <div className="chat-room">
    <Navbar page="chat"/>
    <ChatTile/>
    <div className="chat-page">
    <ChatBox/>
    <SendMessageChatRoom imageURL="/customerProfilePicture.jpg" senderID="123" receiverID="1234"/>
  </div> 
  </div>
  </ChatContext.Provider>
  );
}
 
export default ChatPharmacy;