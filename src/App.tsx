import React from 'react';
import logo from './proj_logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learn Financing using the link Below:
        </p>
        <a
          className="App-link"
          href="https://www.fin-gpt.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open fingpt
        </a>
      </header>
    </div>
  );
}

export default App;
