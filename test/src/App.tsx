import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import SingleProject from "./pages/SingleProject.tsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<SingleProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import projectCategories from "../assets/work";
// import Navbar from "../components/Navbar";

// const SingleProject: React.FC = () => {
//   const { slug } = useParams();
//   const [project, setProject] = useState({
//     title: "",
//     description: "",
//     slug: "",
//     img: "",
//     date: "",
//   });

//   useEffect(() => {
//     const foundProject = projectCategories.find(
//       (project: {
//         title: string;
//         description: string;
//         date: string;
//         slug: string;
//         img: string;
//       }) => project.slug === slug
//     );

//     if (foundProject) {
//       setProject(foundProject);
//     }
//   }, [slug]);

//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col items-center justify-center mt-20">
//         <h1 className="text-4xl font-bold text-center">{project?.title}</h1>
//         <p className="text-center">{project.description}</p>
//         <div>
//           <img src={project.img} alt="" className="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProject;
