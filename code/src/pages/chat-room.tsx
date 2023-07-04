import ChatTile from "../components/chatTile";
import '../components/assets/css/chat-page.css';
import '../components/assets/css/chat.css';
import ChatBox from "../components/chatBox";
import SendMessageChatRoom from "../components/chatSendMessage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "../components/navbar";

const ChatPharmacy = () => {

  return ( 
  <div className="chat-room">
    <Navbar page="chat"/>
    <ChatTile/>
    <div className="chat-page">
    <ChatBox/>
    <SendMessageChatRoom imageURL="/customerProfilePicture.jpg" senderID="123" receiverID="1234"/>
  </div> 
  </div>
  );
}
 
export default ChatPharmacy;