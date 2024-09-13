import React from "react";
import Navbar from "./Navbar";
import Jumbo from "./Jumbo";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  return (
      <>
        <Navbar />
        <Jumbo />
        <About />
        <Technologies />
        <Projects />
        <Education />
        <Contact />
        <Footer />
        <ScrollToTop />
      </>
  );
};

export default Home;
