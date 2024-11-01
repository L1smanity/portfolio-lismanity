import React, { useState } from "react";

// Define project categories with associated projects
const projectCategories = {
  ecommerce: [
    {
      title: "E-commerce Project One",
      description: "A brief description of E-commerce Project One.",
      date: "January 2023",
    },
    {
      title: "E-commerce Project Two",
      description: "A brief description of E-commerce Project Two.",
      date: "February 2023",
    },
    {
      title: "E-commerce Project Two",
      description: "A brief description of E-commerce Project Two.",
      date: "February 2023",
    },
  ],
  mobileapps: [
    {
      title: "Mobile App Project One",
      description: "A brief description of Mobile App Project One.",
      date: "March 2023",
    },
    {
      title: "Mobile App Project Two",
      description: "A brief description of Mobile App Project Two.",
      date: "April 2023",
    },
  ],
  figma: [
    {
      title: "Figma Design Project One",
      description: "A brief description of Figma Design Project One.",
      date: "May 2023",
    },
    {
      title: "Figma Design Project Two",
      description: "A brief description of Figma Design Project Two.",
      date: "June 2023",
    },
  ],
};

const Works: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof projectCategories>("ecommerce");

  return (
    <div className="flex flex-col items-center px-10 md:px-72 mt-20 md:mt-48">
      <h1 className="text-4xl font-mono text-black mb-6">Projects</h1>

      {/* Tab Menu */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setSelectedCategory("ecommerce")}
          className={`p-2 text-sm font-bold ${
            selectedCategory === "ecommerce"
              ? "bg-[rgb(137,176,168)] text-black shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"
              : "bg-[rgb(137,176,168)] text-black"
          }`}
        >
          E-Commerce
        </button>
        <button
          onClick={() => setSelectedCategory("mobileapps")}
          className={`p-2 text-sm font-bold ${
            selectedCategory === "mobileapps"
              ? "bg-[rgb(137,176,168)] text-black shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"
              : "bg-[rgb(137,176,168)] text-black"
          }`}
        >
          Mobile Apps
        </button>
        <button
          onClick={() => setSelectedCategory("figma")}
          className={`p-2 text-sm font-bold ${
            selectedCategory === "figma"
              ? "bg-[rgb(137,176,168)] text-black shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"
              : "bg-[rgb(137,176,168)] text-black"
          }`}
        >
          Figma
        </button>
      </div>

      {/* Project Descriptions for the selected category */}
      <div className="w-full md:w-3/4">
        {projectCategories[selectedCategory].map((project, index) => (
          <div key={index} className=" border-gray-400 pb-4 mb-4">
            <a
              href="#"
              className="text-2xl font-bold text-blue-900 hover:underline"
            >
              {project.title}
            </a>

            <p className="text-sm text-gray-600 mt-1">{project.date}</p>
            <div className="w-full h-1 bg-gray-300 mt-6 mb-4 shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
