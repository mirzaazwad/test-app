import { addDoc, collection,serverTimestamp} from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../config/firestore";

export const useSendMessage=(from:string|null|undefined,to:string|null|undefined,senderImageURL:string,receiverProfilePictureURL:string|undefined)=>{
  const [formValue, setFormValue] = useState('');
  const sendMessage = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addDoc(collection(firestore,'messages'), {
      from: from,
      to:to,
      messages:formValue,
      senderImageURL:senderImageURL?senderImageURL:'customerProfilePicture.jpg',
      receiverImageURL:receiverProfilePictureURL?receiverProfilePictureURL:'customerProfilePicture.jpg',
      createdAt:serverTimestamp(),
    }).catch((error)=>{
      alert(`${error.errorCode}:${error.message}`);
    })
    setFormValue('');
    // dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return {formValue,setFormValue,sendMessage};
}