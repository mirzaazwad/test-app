import ChatTileElement from "./chat-tile-element";
import { IonIcon } from "@ionic/react";
import { searchCircleOutline } from "ionicons/icons";
import './assets/css/chat-tile.css';
import { Form, InputGroup } from "react-bootstrap";
import { useChatParticipants } from "../hooks/useChatParticipants";
import { UserContext } from "../context/user-context";
import { useContext } from "react";

const ChatTile = () => {
  const {filteredSender,SearchTerm,setSearchTerm}=useChatParticipants();
  const user=useContext(UserContext);
  return ( 
    <div className="chat-tile">
      <Form className="searchbar">
      <InputGroup>
      <InputGroup.Text><IonIcon icon={searchCircleOutline} className="icon"></IonIcon></InputGroup.Text>
      <Form.Control type="text" id="SearchTerm" value={SearchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      </InputGroup>
      </Form>
      {filteredSender.map((send:any)=>
      user?.email!==send.email && <ChatTileElement email={send?.email} imageURL={send?.imageURL} username={send?.username}/>
      )}
    </div>
    
   );
}
 
export default ChatTile;

