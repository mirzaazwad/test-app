import { useState } from "react";

export const useSendMessage=()=>{
  const [formValue, setFormValue] = useState('');
  const sendMessage = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const { uid, photoURL } = auth.currentUser;

    // await messagesRef.add({
    //   text: formValue,
    //   createdAt: firestore.FieldValue.serverTimestamp(),
    //   uid,
    //   photoURL
    // })

    // setFormValue('');
    // dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return {formValue,setFormValue,sendMessage};
}