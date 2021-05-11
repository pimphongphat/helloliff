import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';

const liff = window.liff;

function App() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    liff.init({liffId: "1655970673-krpZvGxq"});
    let profile = liff.getProfile();
    setProfile({
        displayName : profile.displayName,
        userId : profile.userId,
        pictureUrl : profile.pictureUrl,
        statusMessage : profile.statusMessage
      });
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.displayName}
        </a>
      </header>
    </div>
  );
}

export default App;
