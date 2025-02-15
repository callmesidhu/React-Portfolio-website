import React from "react";
import "./App.css";

import Waves from './assets/Scripts/Wave';

const App = () => {
  return (
    <div>
      <Waves
        lineColor="#6400c2"
        backgroundColor="rgba(0, 0, 0, 0)"
        waveSpeedX={0.01}
        waveSpeedY={0.02}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={10}
        yGap={36}
      />
    </div>
  );
};

export default App;
