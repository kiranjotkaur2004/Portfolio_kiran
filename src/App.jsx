import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar/Navbar";
import About from "./Pages/About/About";
import "./App.css";
import Skills from "./Pages/Skill/Skills";
import Education from "./Pages/education/Education";
import Project from "./Pages/Project/Project";

import Contact from "./Pages/Contact/Contact";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
