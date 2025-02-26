import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import "./Education.css";
import { SectionWrapper } from "../../hoc";
import { edudetail } from "../../Constant";
import { textVariant } from "../../Components/utils/motion";

const EducationCard = ({ detail }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={detail.date}
    iconStyle={{ background: detail.iconBg, objectFit: "contain" }}
  >
    <div>
      <div className="detail-icon">
        <img
          src={detail.icon}
          style={{
            height: "50px",
            width: "50px",
            background: "white",
            borderRadius: "50px",
            objectFit: "contain",
          }}
        />
        <h3 style={{ text: "white" }}>{detail.title}</h3>
      </div>
      <p>{detail.date}</p>
      <p>{detail.degree_name}</p>
      <p>{detail.description}</p>
    </div>
  </VerticalTimelineElement>
);

const Education = () => {
  return (
    <div className="edu">
      <motion.div variants={textVariant()}>
        <h2 className="sectionSubText">Education</h2>
        <p className="sectionHeadTect">
          My education has been a journey of self discovery and growth.My
          education details are as follows
        </p>
      </motion.div>
      <div className="edu-one">
        <div className="vertical-line">
          <VerticalTimeline>
            {edudetail.map((detail, index) => {
              return <EducationCard key={index} detail={detail} />;
            })}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
