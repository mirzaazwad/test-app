import { Badge } from "react-bootstrap";
import users from "./assets/ts/users";
import { useContext } from "react";
import { ChatContext } from "../context/chat-context";



const ChatTileElement = ({email,imageURL,username}:users) => {
  const senderEmail=useContext(ChatContext);
  return ( 
    <li className="p-2 border-bottom" key={email} onClick={()=>{
      senderEmail?.setSenderEmail(email);
      alert(senderEmail);
      }}>
     
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row">
          <div>
            <img
              src={imageURL}
              alt="avatar"
              className="d-flex align-self-center me-3 custom-image-tile"
              width='50'
            />
            <span className="badge bg-success badge-dot"></span>
          </div>
          <div className="pt-1 w-75" style={{ textAlign: "left" }}>
            <p className="fw-bold mb-0">{username}</p>
          </div>
        </div>
      </div>
    </li>
   );
}
 
export default ChatTileElement;