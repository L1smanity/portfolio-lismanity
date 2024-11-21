import React, { useEffect, useState } from "react";
import projectCategories from "../assets/work";
import { useNavigate } from "react-router-dom";

const Works: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>("e-commerce");
  const [selectedProj, setselectedProj] = useState<
    Array<{
      title: string;
      description: string;
      date: string;
      slug: string;
      img: string;
      category: string;
    }>
  >([
    { title: "", description: "", date: "", slug: "", img: "", category: "" },
  ]);
  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(`${path}`);
  };

  useEffect(() => {
    const selectedProjects = projectCategories.filter(
      (project: {
        title: string;
        description: string;
        date: string;
        slug: string;
        img: string;
        category: string;
      }) => {
        console.log(project.category);
        return project.category === selectedCategory;
      }
    );
    console.log(selectedProjects);
    if (selectedProjects) {
      setselectedProj(selectedProjects);
    }
  }, [selectedCategory]);

  return (
    <div className="flex flex-col items-center px-10 md:px-44 mt-20 md:mt-48">
      <h1 className="text-4xl font-mono text-black mb-6">Projects</h1>

      {/* Tab Menu */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setSelectedCategory("e-commerce")}
          className={`p-2 text-sm font-bold ${
            selectedCategory === "e-commerce"
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
        {selectedProj.map((project, index) => (
          <div key={index} className=" border-gray-400 pb-4 mb-4">
            <p
              onClick={() => redirect(`/project/${project.slug}`)}
              className="text-2xl font-bold text-blue-900 cursor-pointer underline"
            >
              {project.title}
            </p>

            <p className="text-sm text-gray-600 mt-1">{project.date}</p>
            <div className="w-full h-1 bg-gray-300 mt-6 mb-4 shadow-[inset_-2px_-2px_0px_#fff,inset_2px_2px_0px_#808080]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
