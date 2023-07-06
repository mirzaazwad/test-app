import { collection, getDocs, query } from "firebase/firestore";
import { firestore } from "../config/firestore";
import { useEffect, useState } from "react";

export const useChatParticipants = () => {
  const usersRef = collection(firestore, 'users');
  const q = query(usersRef);
  const [sender, setSender] = useState<any[]>([]);
  useEffect(() => {
    const getSender = async () => {
      const data = await getDocs(q);
      setSender(data.docs.map((doc) => doc.data()));
    };
    getSender();
  }, []);
  const [SearchTerm, setSearchTerm] = useState('');
  const [filteredSender, setFilteredSender] = useState<any>([]);
  useEffect(() => {
    const filteredSender = (sender.length > 0 && SearchTerm !== '')
      ? sender.filter((send: any) => send.username.toLowerCase().includes(SearchTerm.toLowerCase()))
      : sender;
    setFilteredSender(filteredSender);
  }, [SearchTerm, sender]);

  return { filteredSender, SearchTerm, setSearchTerm };
};
