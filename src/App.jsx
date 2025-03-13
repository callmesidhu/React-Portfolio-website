import React, { useState } from "react";
import Particles from "./assets/Scripts/Particle";
import Waves from "./assets/Scripts/Wave";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Projects from "./Components/Projects";

const App = () => {
  const [disableParticles, setDisableParticles] = useState(false);

  const handleClick = () => {
    setDisableParticles(true);

    // Restore pointer events after a short delay (optional)
    setTimeout(() => {
      setDisableParticles(false);
    }, 10000); // 1 second delay
  };

  return (
    <div className="relative" onClick={handleClick}>
      {/* Particles on Top */}
      <div
        className={`fixed z-50 h-screen w-full transition-opacity duration-300 ${
          disableParticles ? "pointer-events-none opacity-50" : "pointer-events-auto"
        }`}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
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
      <About />
      <Skills />
      <Projects />
      <Contact />

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
