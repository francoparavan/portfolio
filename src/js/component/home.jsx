import React from "react";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";

const Home = () => {
  return (
      <>
        <Navbar />
        <Jumbo />
        <About />
        <Technologies />
        <Projects />
      </>
  );
};

export default Home;
