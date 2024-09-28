/* eslint-disable jsx-a11y/img-redundant-alt */
import logo from './logo.svg';
import './App.css';
import precipitation from './actualassets/images/precipitation.png';
import Stream from "./stream"
import React, { useState, useEffect, useRef } from 'react';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [streamer, setStreamer] = useState('');
  const [stream, setStream] = useState('');
  const hasPrompted = useRef(false);

  useEffect(() => {
    if (!hasPrompted.current) {
      const streamerName = prompt("Which streamer would you like to watch?");
      setStreamer(streamerName);
      setStream("https://www.twitch.tv/" + streamerName);
      hasPrompted.current = true;
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Stream link={stream} />
        </div>
        <img 
          width={300}
          src={logo} 
          className="App-logo" 
          alt="logo" />
        <img
          height={240}
          src={precipitation}
          alt="An image of how much it rains in Iberia"
        />
        <img 
          height={240}
          src={require('./actualassets/images/precipitation.png')}
          alt="An image of how much it rains in Iberia"
        />
      </header>
    </div>
  );
}

export default App;
