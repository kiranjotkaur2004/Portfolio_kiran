import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Skills from "../Skill/Skills";
import Education from "../education/Education";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

const About = () => {
  return (
    <div>
    <section className="home section grid">
      <img className="home-img" src="/profile.jpeg" alt="" />

      <div className="home-content">
        <div className="home-data">
          <h1 className="home-title">
            <span>I'm Dinky.</span> Full Stack Web Developer
          </h1>
          <p className="home-description">
            As a passionate web developer, I specialize in creating innovative
            and user-centric websites that combine aesthetic design with robust
            functionality.
          </p>

          {/* <div className="skill-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
              alt=""
            />
            <img src="/react.png" alt="" />
            <img src="redux.png" alt="" />
            <img src="/node.png" alt="" />
            <img src="/express.png" alt="" />
            <img src="/mongodb.png" alt="" />
          </div> */}
          <Link to="/skills" className="button">
            More about me
            <span className="button-icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
        <div className="state grid">
     
        </div>
      </div>
      <div className="color-block"></div>
   
    </section>
    <Skills/>
    <Education/>
   <Project/>
   <Contact/>
    </div>
  );
};

export default About;
