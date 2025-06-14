import React from "react";
import "./Skills.css";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", image: "/html.png" },
      { name: "CSS", image: "/css.png" },
      { name: "Bootstrap", image: "/bootstrap.png" },
      { name: "Javascript", image: "/javascript.png" },
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
      { name: "Sql", image: "/sql.png" },
    ],
  },
  {
    category: "Others",
    technologies: [
      { name: "Github", image: "/Github.png" },
      { name: "VS Code", image: "/vs.png" },
      { name: "Git", image: "/git.png" },
      { name: "Postman", image: "/postman.png" },
      { name: "Wix", image: "/wix.png" },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-description">I worked on various frontend</p>
        <div className="skills-list">
          {skills.map((skill, index) => {
            return (
              <div key={index} className="skill-category">
                <h3>{skill.category}</h3>
                <div className="technologies">
                  {skill.technologies.map((tech, idx) => (
                    <div key={idx} className="technology">
                      <img src={tech.image} className="icon-image" />
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
