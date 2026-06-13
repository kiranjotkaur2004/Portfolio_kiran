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
        <img className="home-img" src="/profile.jpg" alt="" />

        <div className="home-content">
          <div className="home-data">
            <h1 className="home-title">
              <span>I'm Kiranjot Kaur.</span> Web Developer, QA Tester &
              Aspiring Data Analyst
            </h1>
            <p className="home-description">
              <b>
                {" "}
                “Quick to learn and adapt to emerging technologies, frameworks,
                and tools in dynamic environments.”
              </b>{" "}
              I am a passionate developer specializing in building user-friendly
              and efficient web applications using the MERN stack (MongoDB,
              Express.js, React, Node.js). I also have hands-on experience in
              API testing using Postman and QA methodologies, ensuring
              application quality and reliability.
              <br></br>
              Currently, I am expanding my skills in Data Analytics, focusing on
              data processing, SQL, and data visualization to strengthen my
              analytical and problem-solving abilities.
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
          <div className="state grid"></div>
        </div>
        <div className="color-block"></div>
      </section>
      <Skills />
      <Education />
      <Project />
      <Contact />
    </div>
  );
};

export default About;
