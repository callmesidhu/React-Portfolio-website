import React, { useState, useEffect } from "react";
import Particles from "./assets/Scripts/Particle";
import Waves from "./assets/Scripts/Wave";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Loader from "./Components/Loader"; // Import Loader component
import Experience from "./Components/Experience";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [disableParticles, setDisableParticles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show loader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setDisableParticles(true);

    setTimeout(() => {
      setDisableParticles(false);
    }, 10000);
  };

  if (loading) {
    return <Loader />; // Show loader before rendering app content
  }

  return (
    <div className="relative" onClick={handleClick}>
      {/* Particles */}
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
      <Experience />
      <Projects />
      <Contact />

      {/* Waves */}
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
