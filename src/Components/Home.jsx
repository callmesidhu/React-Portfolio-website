import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import myImage from '../assets/images/my.png';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 overflow-hidden" id="home">

      {/* Left Side Text with animation */}
      <motion.div
        className="md:flex-1 text-center md:text-left px-4"
        initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hey, I'm <span className="text-violet-500">S SIDHARTH</span>
        </h1>
        <br />
        <h1 className="text-xl md:text-2xl font-bold mt-4">
          I'm a{" "}
          <TypeAnimation
            sequence={[
              "Full Stack Web/App Developer ;", 2000,
              "Tech and AI Enthusiast ;", 2000,
              "Data Analyst ;", 2000,
              "Prompt Engineer ;", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-violet-500"
          />
        </h1>
      </motion.div>

      {/* Right Side Image with animation */}
      <motion.div
        className="md:flex-1 flex justify-center mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
      >
        <div className="relative">
          <motion.img
            src={myImage}
            alt="me"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto rounded-lg shadow-lg relative z-10"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* Violet Blur Shadow */}
          <motion.div
            className="absolute inset-0 bg-violet-700 opacity-40 blur-3xl rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          ></motion.div>

          {/* White Underline */}
          <motion.div
            className="absolute w-full h-2 bg-white bottom-0 left-0 z-10"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.5 }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
}
