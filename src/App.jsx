import React from "react";
import Particles from "./assets/Scripts/Particle";
import Waves from './assets/Scripts/Wave';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="relative">
      {/* Particles on Top */}
      <div className="fixed inset-0 z-50">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>

      {/* Navbar and Content */}
      <Navbar />
      <Home />

      {/* Waves in Background */}
      <div className="fixed inset-0 -z-10">
        <Waves
          lineColor="#2e0059"
          backgroundColor="rgba(0, 0, 0, 0)"
          waveSpeedX={0.03}
          waveSpeedY={0.03}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={10}
          yGap={36}
        />
      </div>
    </div>
  );
};

export default App;
