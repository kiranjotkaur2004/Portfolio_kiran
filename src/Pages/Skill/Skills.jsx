import React from "react";
import "./Skills.css";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", image: "/html.png" },
      { name: "CSS", image: "/css.png" },
      { name: "Bootstrap", image: "/bootstrap.png" },
      { name: "JavaScript", image: "/javascript.png" },
      { name: "PHP", image: "/pn.png" },
      { name: "React", image: "/react.png" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node Js", image: "/node.png" },
      { name: "MongoDB", image: "/mongodb.png" },
      { name: "Express JS", image: "/express.png" },
      { name: "SQL", image: "/sql.png" },
    ],
  },
  {
    category: "Quality Assurance (QA)",
    technologies: [
      { name: "Manual Testing" },
      { name: "API Testing (Postman)" },
      { name: "Test Case Design" },
      { name: "Selenium WebDriver" },
      { name: "Playwright (E2E Automation)" },
      { name: "Python Automation Testing" },
      { name: "CRUD Validation" },
      { name: "Authentication Testing" },
      { name: "Regression Testing" },
      { name: "Functional Testing" },
      { name: "UI Testing" },
      { name: "Bug Reporting" },
      { name: "STLC" },
    ],
  },
  {
    category: "Data Analyst (Learning)",
    technologies: [
      { name: "Excel" },
      { name: "SQL for Data Analysis" },
      { name: "Python Basics" },
      { name: "Data Cleaning" },
      { name: "Data Visualization (Power BI/Tableau)" },
    ],
  },
  {
    category: "Others",
    technologies: [
      { name: "GitHub", image: "/Github.png" },
      { name: "VS Code", image: "/vs.png" },
      { name: "Git", image: "/git.png" },
      { name: "Postman", image: "/postman.png" },
      { name: "Wix", image: "/wix.png" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-description">
        I work as a Full Stack Developer, QA Tester, and Aspiring Data Analyst
      </p>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-category">
            <h3>{skill.category}</h3>

            <div className="technologies">
              {skill.technologies.map((tech, idx) => (
                <div key={idx} className="technology">
                  {/* SHOW IMAGE ONLY IF EXISTS */}
                  {tech.image && (
                    <img
                      src={tech.image}
                      className="icon-image"
                      alt={tech.name}
                    />
                  )}

                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
