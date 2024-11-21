import React, { useState } from "react";
import lis from "../assets/lity.svg";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div>
      {/* Full-width Header */}
      <header className="flex flex-col items-center    justify-center bg-[rgb(207, 207, 207)] border-2 border-white border-r-gray-700 border-b-gray-700 border-l-gray-500 border-t-gray-500 shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080] p-2 min-h-20 m-2 mb-0">
        {/* Centered Content Container */}
        <div className="flex flex-row items-center justify-between w-full max-w-7xl   px-12">
          {/* Logo */}
          <img src={lis} alt="" />

          {/* Navigation Links */}
          <div className="flex items-center  md:space-x-10">
            <a
              href="#about-me"
              className={`text-sm font-mono font-bold text-black no-underline p-4 transition duration-300 ease-in-out hover:text-[rgb(16, 52, 166)] hover:shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080] ${
                activeLink === "About Me"
                  ? "shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"
                  : ""
              }`}
              onClick={() => handleLinkClick("About Me")}
            >
              About Me
            </a>
            <a
              href="#projects"
              className={`text-sm font-mono font-bold text-black no-underline p-4 transition duration-300 ease-in-out hover:text-[rgb(16, 52, 166)] hover:shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080] ${
                activeLink === "Projects"
                  ? "shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"
                  : ""
              }`}
              onClick={() => handleLinkClick("Projects")}
            >
              Projects
            </a>
            <a
              href="#contact"
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
        </div>
      </header>
    </div>
  );
};

export default Navbar;
