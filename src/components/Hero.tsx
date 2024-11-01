import React, { useState } from "react";

import hero from "../assets/b032d241-4fdd-49e8-81b2-f835c249b8b8.png"; // Ensure this path is correct

const Hero: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>(""); // Track active link

  // Function to handle link click
  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Set the clicked link as active
  };

  return (
    <div>
      <header className="flex space-x-20 items-center justify-start bg-[rgb(207, 207, 207)] border-2 px-44 border-white border-r-gray-700 border-b-gray-700 border-l-gray-500 border-t-gray-500 p-2 h-20 shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080] m-2 mb-0">
        <span className="text-lg font-mono text-black tracking-widest">
          lismanity
        </span>
        <div className="flex space-x-8">
          <a
            href="#about-me"
            className={`text-sm font-mono font-bold text-black no-underline p-4 transition duration-300 ease-in-out hover:text-[rgb(16, 52, 166)] hover:shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080] ${
              activeLink === "Projects"
                ? "shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"
                : ""
            }`}
            onClick={() => handleLinkClick("Projects")}
          >
            About Me
          </a>
          <a
            href="#"
            className={`text-sm font-mono font-bold text-black no-underline p-4 transition duration-300 ease-in-out hover:text-[rgb(16, 52, 166)] hover:shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080] ${
              activeLink === "About"
                ? "shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"
                : ""
            }`}
            onClick={() => handleLinkClick("About")}
          >
            Projects
          </a>
          <a
            href="#"
            className={`text-sm font-mono font-bold text-black no-underline p-4 transition duration-300 ease-in-out hover:text-[rgb(16, 52, 166)] hover:shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080] ${
              activeLink === "Contact"
                ? "shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"
                : ""
            }`}
            onClick={() => handleLinkClick("Contact")}
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero Section Below Header */}
      <section className="flex flex-row items-center justify-between mt-8 px-44">
        {/* Left Side: Text and Button */}
        <div className="flex flex-col items-start w-1/2">
          <h1 className="text-4xl font-mono text-black">
            {" "}
            Hello! My name is Labinot Ismani
          </h1>
          <p className="mt-4 text-lg font-mono text-black">
            I am a passionate UX/UI designer dedicated to creating seamless and
            engaging user experiences. With a keen eye for detail and a love for
            aesthetics, I strive to balance functionality with visual appeal. I
            believe that great design is not just about how things look, but how
            they work.
          </p>
          <button
            className="bg-[rgb(207, 207, 207)] border-2 border-white border-r-gray-700 border-b-gray-700 border-l-gray-500 border-t-gray-500 py-2 px-4 text-black font-bold rounded transition 
                       shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080] mt-6 cursor-pointer"
            style={{
              padding: "10px 60px",
              boxShadow: "inset -2px -2px 0px #fff, inset 2px 2px 0px #808080",
            }}
          >
            Fire
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="w-1/3 flex justify-center mt-6 relative">
          <img src={hero} alt="Old Toys" className="  z-20" />
          <div
            className=" inset-0  shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080] z-0"
            style={{
              background: "rgba(255, 255, 255, 0.5)", // Semi-transparent background for the shadow effect
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
