import './App.css'
import Landing from './pages/landing'
import ChatRoom from './pages/chat-room';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route index element={<Landing/>}/>
          <Route path="/chats" element={<ChatRoom/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
