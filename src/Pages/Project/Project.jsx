import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { projects } from "../../Constant/index";
import { fadeIn, textVariant } from "../../Components/utils/motion";
import "./Project.css";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
      className="project-card"
    >
      <Tilt className="custom-box">
        <div className="project-card-content">
          <img src={image} alt={name} className="apple-image" />
          <div className="card-content">
            <div className="github" onClick={() => window.open(source_code_link, "_blank")}>
              <img src="/Github.png" className="github-image" alt="Github icon" />
            </div>
          </div>
        </div>
        <div className="project-info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="project-tags">
          {tags.map((tag) => (
            <p key={tag.name} className="tag" style={{ color: tag.color }}>
              {tag.name}
              {tag.icon && <img src={tag.icon} alt={`${tag.name} icon`} className="tag-icon" />}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Project = () => {
  return (
    <div className="projects">
      <motion.div variants={textVariant()}>
        <h2 className="sectionSubText">Projects</h2>
        <p className="sectionHeadText">My work</p>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="project-variants">
        Following projects showcase my skills and experience through real-world examples. Each project is briefly described with links to code repositories and live demos.
      </motion.p>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
