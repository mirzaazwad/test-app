import ChatTileElement from "./chatTileElement";
import { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { chatbubbleEllipsesOutline, searchCircleOutline } from "ionicons/icons";
import './assets/css/chat-tile.css';
import { Form, InputGroup } from "react-bootstrap";

const ChatTile = () => {
  const sender=[
    {
      senderID:"123",
  imageURL:"/customerProfilePicture.jpg",
  senderName:"John Doe",
  message:"Hello World",
  datetime:new Date(),
  senderType:"customer",
  notifications:1
    },{
      senderID:"234",
  imageURL:"/pharmacyProfilePicture.png",
  senderName:"Jane Doe",
  message:"Hello Earth",
  senderType:"customer",
  datetime:new Date(),
  notifications:2
    },{
      senderID:"345",
  imageURL:"/brokenProfilePicture.jpg",
  senderName:"Someone",
  message:"Hello Venus",
  senderType:"delivery",
  datetime:new Date(),
  notifications:3
    }
  ];

  return ( 
    <div className="chat-tile">
      <Form className="searchbar">
      <InputGroup>
      <InputGroup.Text><IonIcon icon={searchCircleOutline} className="icon"></IonIcon></InputGroup.Text>
      <Form.Control type="text" id="search"/>
      </InputGroup>
      </Form>
      {sender.map((send,index)=>
      <ChatTileElement senderID={send.senderID} imageURL={send.imageURL} senderName={send.senderName} message={send.message} datetime={send.datetime} senderType={send.senderType} notifications={send.notifications}/>
      )}
    </div>
    
   );
}
 
export default ChatTile;

