import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/signup" element={ <Signup /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;