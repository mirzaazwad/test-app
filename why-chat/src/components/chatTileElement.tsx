import { Badge } from "react-bootstrap";

interface ChatTileProps{
  senderID:string;
  imageURL:string;
  senderName:string;
  message:string;
  datetime:Date;
  notifications:number;
  senderType:string;
}

const ChatTileElement = ({senderID,imageURL,senderName,message,datetime,notifications,senderType}:ChatTileProps) => {
  return ( 
    <li className="p-2 border-bottom" key={senderID}>
     
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
            <p className="fw-bold mb-0">{senderName}</p>
            <p className="small text-muted">{message}</p>
          </div>
        </div>
        <div className="pt-1">
          <p className="small text-muted mb-1">{datetime.toLocaleDateString()}</p>
          <span className="badge bg-danger rounded-pill float-end">
            {notifications}
          </span>
        </div>
      </div>
    </li>
   );
}
 
export default ChatTileElement;