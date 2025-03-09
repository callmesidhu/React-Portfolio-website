import React from "react";
import { TypeAnimation } from "react-type-animation";
import myImage from '../assets/images/my.png';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8">
      {/* Left Side Text */}
      <div className="md:flex-1 text-center md:text-left px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hey, I'm <span className="text-violet-500">S SIDHARTH</span>
        </h1>
        <br />
        <h1 className="text-xl md:text-2xl font-bold mt-4">
          I'm a{" "}
          <TypeAnimation
            sequence={[
              "Full Stack Web Developer", 2000,
              "Prompt Engineer", 2000,
              "Full Stack App Developer", 2000,
              "Tech and AI Enthusiast", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-violet-500"
          />
        </h1>
      </div>

      {/* Right Side Image */}
      <div className="md:flex-1 flex justify-center mt-8 md:mt-0">
        <div className="relative">
          {/* Image */}
          <img
            src={myImage} // Ensure this path is correct
            alt="me"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto rounded-lg shadow-lg relative z-10"
          />

          {/* Violet Blur Shadow */}
          <div className="absolute inset-0 bg-violet-700 opacity-40 blur-3xl rounded-lg"></div>

          {/* White Underline */}
          <div className="absolute w-full h-2 bg-white "></div>
        </div>
      </div>
    </div>
  );
}
