import { useState } from "react";

export const useChatSender=()=>{
  const [senderEmail,setSenderEmail] = useState(" ");
  const [messages,setMessages]=useState<any>([]);
  return {senderEmail,messages,setSenderEmail};
}