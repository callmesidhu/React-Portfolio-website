import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-50">
      {/* Desktop Navbar */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">My Portfolio</div>

        {/* Toggle Button (visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Menu (visible on large screens) */}
        <div className="hidden lg:flex space-x-6">
          <a href="#home" className="text-white hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-400">
            About
          </a>
          <a href="#skills" className="text-white hover:text-gray-400">
            Skills
          </a>
          <a href="#experiences" className="text-white hover:text-gray-400">
            Experiences
          </a>
          <a href="#projects" className="text-white hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="text-white hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu (slides in from the left) */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 bg-opacity-95 backdrop-blur-sm transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <a
            href="#home"
            onClick={toggleMenu}
            className="text-white hover:text-gray-400"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="text-white hover:text-gray-400"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className="text-white hover:text-gray-400"
          >
            Skills
          </a>
          <a
            href="#experiences"
            onClick={toggleMenu}
            className="text-white hover:text-gray-400"
          >
            Experiences
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="text-white hover:text-gray-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="text-white hover:text-gray-400"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;