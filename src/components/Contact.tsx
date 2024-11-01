import React, { useState } from "react";
const Contact: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="  ">
      {" "}
      <header className="flex space-x-20 items-center justify-start bg-[rgb(137,176,168)] text-blue-900  border-2 px-44  border-r-gray-700 border-b-gray-700 border-l-gray-500 border-t-[rgb(137,176,168)] p-2 h-20 shadow-[inset_-2px_-2px_0px_#808080,inset_2px_2px_0px_#fff] m-2 mb-0">
        <div className="flex space-x-8">
          <a
            href="#"
            className={`text-sm font-mono font-bold text-[rgb(16, 52, 166)] no-underline p-4 ${
              activeLink === "Contact"
                ? "shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"
                : ""
            }`}
          >
            lismanity@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/labinot-ismani-a73b74301/"
            className={`text-sm font-mono font-bold text-[rgb(16, 52, 166)] text-blue-900 hover:underline p-4 ${
              activeLink === "Social"
                ? "shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"
                : ""
            }`}
            onClick={() => handleLinkClick("About")}
          >
            Linked In
          </a>
          <a
            href="#"
            className={`text-sm font-mono font-bold text-[rgb(16, 52, 166)] text-blue-900 p-4 ${
              activeLink === "Phone"
                ? "shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"
                : ""
            }`}
          >
            +383 48 233 302
          </a>
        </div>
      </header>
    </div>
  );
};

export default Contact;
