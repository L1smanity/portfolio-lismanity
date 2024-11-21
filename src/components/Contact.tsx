import React, { useState } from "react";

const Contact: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div>
      {/* Contact Header */}
      <header className="flex space-x-16 items-center justify-start bg-[rgb(137,176,168)] text-blue-900 border-2 px-12 md:px-44 border-r-gray-700 border-b-gray-700 border-l-gray-500 border-t-[rgb(137,176,168)] p-4 h-20 shadow-[inset_-2px_-2px_0px_#808080,inset_2px_2px_0px_#fff] m-2 ">
        {/* Contact Links */}
        <div className="flex space-x-8">
          {/* Email Link */}
          <a
            href="mailto:lismanity@gmail.com"
            onClick={() => handleLinkClick("Contact")}
            className={`text-sm font-mono font-bold text-[rgb(16, 52, 166)] no-underline p-4 ${
              activeLink === "Contact"
                ? "shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"
                : ""
            }`}
            aria-label="Email"
          >
            lismanity@gmail.com
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/labinot-ismani-a73b74301/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick("Social")}
            className={`text-sm font-mono font-bold text-[rgb(16, 52, 166)] hover:underline p-4 ${
              activeLink === "Social"
                ? "shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"
                : ""
            }`}
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>

          {/* Phone Number */}
          <a
            href="tel:+38348233302"
            onClick={() => handleLinkClick("Phone")}
            className={`text-sm font-mono font-bold text-[rgb(16, 52, 166)] p-4 ${
              activeLink === "Phone"
                ? "shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"
                : ""
            }`}
            aria-label="Phone Number"
          >
            +383 48 233 302
          </a>
        </div>
      </header>
    </div>
  );
};

export default Contact;
