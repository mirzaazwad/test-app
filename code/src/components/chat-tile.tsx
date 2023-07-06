import ChatTileElement from "./chat-tile-element";
import { IonIcon } from "@ionic/react";
import { searchCircleOutline } from "ionicons/icons";
import './assets/css/chat-tile.css';
import { Form, InputGroup } from "react-bootstrap";
import { useChatParticipants } from "../hooks/useChatParticipants";

const ChatTile = () => {
  const {filteredSender,search,setSearch}=useChatParticipants();
  return ( 
    <div className="chat-tile">
      <Form className="searchbar">
      <InputGroup>
      <InputGroup.Text><IonIcon icon={searchCircleOutline} className="icon"></IonIcon></InputGroup.Text>
      <Form.Control type="text" id="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      </InputGroup>
      </Form>
      {filteredSender.map((send:any)=>
      <ChatTileElement email={send?.email} imageURL={send?.imageURL} username={send?.username}/>
      )}
    </div>
    
   );
}
 
export default ChatTile;

