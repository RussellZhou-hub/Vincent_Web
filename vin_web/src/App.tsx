import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup'
import ReactMarkdown from 'react-markdown'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Article from './Components/Article/Article';
import Login from './Components/Login/Login.jsx';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Project_star from './Components/ProjectStar/ProjectStar.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            {/* for navbar menu */}
            <div className="nav-area">
              <a href="/#" className="logo">
                Logo
              </a>
              <Navbar />
            </div>

            <Routes>
              <Route path="/home" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/article" element={<Article />} />
            </Routes>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
            <Routes>
              <Route path="/Project_star" element={<Project_star />} />
            </Routes>
          </div>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
