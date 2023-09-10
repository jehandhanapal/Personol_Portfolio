import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projcets";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Skills/>
      <Projects/>
      <About/>
      <Footer/>

    </>
  );
}

export default App;
