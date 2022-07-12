import React from "react";
import Countdown from 'react-countdown';
import './App.css';
import Completionist from "./completionist";

function App() {
  return (
    <Countdown className="app" date={Date.now() + 10000}>
      <Completionist />
    </Countdown>
  );
}

export default App;
