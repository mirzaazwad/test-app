import { IonIcon } from "@ionic/react";
import { chatboxEllipsesSharp } from 'ionicons/icons';
import { SignOut } from "./sign-out";

interface NavbarProps {
  page: string;
}

const Navbar = ({ page }: NavbarProps) => {
  return (
    <div className="customNavbar d-flex w-100">
      <div className="mt-2 ms-2">
        <h1><IonIcon icon={chatboxEllipsesSharp}></IonIcon></h1>
      </div>
      <div className="me-6 mt-2 ms-2">
        <h3>Why Chat</h3>
      </div>
      {page==="chat" && (<div className="ms-auto mt-2 me-6">
        <SignOut/>
      </div>)}
    </div>
  );
}

export default Navbar;
