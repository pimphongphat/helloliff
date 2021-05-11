import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import useConstructor from "./use.constructor";

const liff = window.liff;

function App() {
  const [profile, setProfile] = useState([]);

  useConstructor(async () => {
    //liff.init({liffId: "1655970673-krpZvGxq"});
    //https://liff.line.me/1655970673-krpZvGxq
    await liff.init({ liffId: "1655970673-krpZvGxq" });
    //await liff.init({ liffId: "1655977698-0KXWzMOG" });
    if (!liff.isLoggedIn()) {
      await liff.login().then( async () => {

      let profile = await liff.getProfile();
      console.log(profile);
      setProfile({
          displayName : profile.displayName,
          userId : profile.userId,
          pictureUrl : profile.pictureUrl,
          statusMessage : profile.statusMessage
        });
      });
    }
  });

  useEffect(async () => {
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
        <div style={{ marginTop: 20 }}>
        <button onClick={async () => {
          
    //liff.init({liffId: "1655970673-krpZvGxq"});
    //https://liff.line.me/1655970673-krpZvGxq
    await liff.init({ liffId: "1655970673-krpZvGxq" });
    //await liff.init({ liffId: "1655977698-0KXWzMOG" });
      let profile = await liff.getProfile();
      setProfile({
          displayName : profile.displayName,
          userId : profile.userId,
          pictureUrl : profile.pictureUrl,
          statusMessage : profile.statusMessage
        });
      });


        }}>Get User Info</button>
      </div>
        <div style={{ marginTop: 20 }}>
        <button onClick={() => {
          
          liff.sendMessages([{
            type: 'text',
            text: "Thank you, Bye!"
          }]).then(() => {
            liff.closeWindow();
          });

        }}>Close LIFF</button>
      </div>
      </header>
    </div>
  );
}

export default App;
