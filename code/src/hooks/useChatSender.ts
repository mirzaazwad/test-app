import { collection, getDocs, onSnapshot, or, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../config/firestore";

export const useChatSender=()=>{
  const [senderEmail,setSenderEmail] = useState("");
  const [senderImageURL,setSenderImageURL]=useState("");
  const [messages,setMessages]=useState<any>([]);
  const messagesRef=collection(firestore,'messages');
  const q=query(messagesRef,or(where('to','==',senderEmail),where('from','==',senderEmail)),orderBy('createdAt'));

  onSnapshot(q, (querySnapshot) => {
    const result:any[] = [];
    querySnapshot.forEach((doc) => {
        result.push(doc.data());
    });
    setMessages(result);
  });

  return {senderEmail,senderImageURL,messages,setSenderEmail,setSenderImageURL};
}