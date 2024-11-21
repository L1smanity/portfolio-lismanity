import React from "react";
import Hero from "../components/Hero";
import Who from "../components/Who";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Who />
      <Works />

      <Contact />
    </div>
  );
};

export default Home;
