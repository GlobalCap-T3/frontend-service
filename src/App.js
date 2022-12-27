import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserProvider from './context/user';
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Discussion from "./pages/Discussion"

import './App.css';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/signup" element={ <Signup /> } />
            <Route path="/discussion" element={ <Discussion /> } />
            <Route path="/discussion/:discussionId" element={ <Discussion /> } />
            <Route path="/profile" element={ <Profile /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;