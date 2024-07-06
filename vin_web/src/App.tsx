import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup'
import ReactMarkdown from 'react-markdown'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Article from './Components/Article/Article';
import About from './Components/About/About.jsx';
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav className="navbar">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <Link to="/home">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/article">Article</Link>
                </li>

                

                <li className="navbar-item">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
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
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
