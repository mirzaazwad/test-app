import { collection, getDocs, query } from "firebase/firestore";
import { firestore } from "../context/firestore";
import { useEffect, useState } from "react";

export const useChatParticipants=()=>{
  const messagesRef = collection(firestore,'users');
  const q=query(messagesRef);
  const [sender,setSender]=useState<any>([]);
  useEffect(()=>{
    const getSender=async()=>{
      const data=await getDocs(q);
      setSender(data.docs.map(doc=>doc.data()));
    }
    getSender();
  },[])
  const [search,setSearch]=useState('');
  const filteredSender=search!==""?sender.filter((send:any)=>{search.toLowerCase().match(send.username.toLowerCase())}):sender;
  
  

  return {filteredSender,search,setSearch};
}