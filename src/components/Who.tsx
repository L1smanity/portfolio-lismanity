import React from "react";

const Who: React.FC = () => {
  return (
    <div
      id="about-me"
      className="flex flex-col items-center px-10 md:px-44 mt-20 md:mt-48"
    >
      {/* Title */}
      <h1 className="text-5xl font-mono font-bold text-black mb-6 tracking-wide">
        About Me
      </h1>

      {/* Container with Inner Shadow */}
      <div className="w-full md:w-[60%] bg-[rgb(207, 207, 207)] text-black p-10 rounded-xl border-white border-r-gray-700 border-b-gray-700 border-l-gray-500 border-t-gray-500 shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080] transition-all duration-300">
        {/* Flex Row for Tech Stack */}
        <div className="flex flex-wrap justify-center space-x-4 text-lg text-blue-900 font-bold mb-8">
          <span className=" px-4 py-1 ">#Figma</span>
          <span className=" px-4 py-1 ">#ReactJS</span>
          <span className=" px-4 py-1 ">#ThreeJS</span>
          <span className=" px-4 py-1 ">#Tailwind</span>
        </div>

        {/* Description */}
        <p className="text-lg  font-mono leading-7 tracking-wider text-center text-black">
          Passionate about crafting immersive digital experiences with modern
          tools. My expertise ranges from creating seamless user interfaces with{" "}
          <span className="font-bold">React</span>, developing interactive 3D
          visuals with <span className="font-bold">Three.js</span>, to designing
          pixel-perfect mockups in <span className="font-bold">Figma</span>.
        </p>

        {/* Divider */}
        <div className="w-full h-1 bg-gray-300 mt-6 mb-4 shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"></div>

        {/* Additional Details */}
        <p className="text-lg  font-mono text-center text-black">
          I constantly explore new technologies and refine my skills through
          personal projects. Let’s collaborate and turn visionary concepts into
          reality.
        </p>
      </div>
    </div>
  );
};

export default Who;
