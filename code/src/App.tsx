import './App.css'
import Landing from './pages/landing'
import ChatRoom from './pages/chat-room';
import { auth } from './config/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { UserContext } from './context/user-context';

function App() {
  const [user] = useAuthState(auth);
  return (
    <UserContext.Provider value={user}>
      <div className="App">
     {user ? <ChatRoom /> : <Landing />}
    </div>
    </UserContext.Provider>
  )
}

export default App
