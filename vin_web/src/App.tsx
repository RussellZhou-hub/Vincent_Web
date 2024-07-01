import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup'
import ReactMarkdown from 'react-markdown'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginSignup />
      </header>
    </div>
  );
}

export default App;
