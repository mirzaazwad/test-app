import './App.css'
import Landing from './pages/landing'
import ChatRoom from './pages/chat-room';
import { auth } from './context/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
     {user ? <ChatRoom /> : <Landing />}
    </div>
  )
}

export default App
