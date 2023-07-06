import { Button } from "react-bootstrap"
import { auth } from "../config/firestore"

export const SignOut=()=>{
  return auth.currentUser && (
    <Button variant="primary"  onClick={() => auth.signOut()}>Log Out</Button>
  )
}