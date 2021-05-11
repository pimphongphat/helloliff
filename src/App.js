import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';

const liff = window.liff;

function App() {
  const [profile, setProfile] = useState([]);

  useEffect(async () => {
    //liff.init({liffId: "1655970673-krpZvGxq"});
    //https://liff.line.me/1655970673-krpZvGxq
    await liff.init({ liffId: "1655970673-krpZvGxq" });
    if (!liff.isLoggedIn()) {
      liff.login();
    }
    let profile = liff.getProfile();
    console.log(profile);
    setProfile({
        displayName : liff.getOS(),
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