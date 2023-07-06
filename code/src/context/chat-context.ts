import { createContext } from "react";

interface Sender{
  senderEmail:string;
  setSenderEmail:React.Dispatch<React.SetStateAction<string>>;
  messages:any[];
}
export const ChatContext=createContext<Sender|undefined>(undefined);