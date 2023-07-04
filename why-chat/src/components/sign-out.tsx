import { auth } from "../context/firestore"

export const SignOut=()=>{
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}