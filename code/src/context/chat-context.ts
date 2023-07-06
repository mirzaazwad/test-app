import { createContext } from "react";

interface Sender{
  senderEmail:string;
  setSenderEmail:React.Dispatch<React.SetStateAction<string>>;
  messages:any[];
  senderImageURL:string;
  setSenderImageURL:React.Dispatch<React.SetStateAction<string>>;
}
export const ChatContext=createContext<Sender|undefined>(undefined);