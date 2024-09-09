import React from "react";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
      <>
        <Navbar />
        <Jumbo />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </>
  );
};

export default Home;
