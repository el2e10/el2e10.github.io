import React from "react";
import projectStyle from "../styles/Project.module.css";
import TechnologyItem from "./TechnologyItem";
import Image from "next/image";

const Project = (props) => {
  const { image, title, date, details, technologies, link, id } = props;

  return (
    <div className={projectStyle.container}>
      <div className={projectStyle.imgStyle}>
        <Image src={image} />
      </div>
      <div className={projectStyle.detailContainer}>
        <h2 className={projectStyle.titleStyle}>{title}</h2>
        <p className={projectStyle.dateStyle}>{date}</p>
        <p className={projectStyle.detailStyle}>{details}</p>
        <div className={projectStyle.technologyStyle}>
          {technologies.map((technology) => {
            return <TechnologyItem text={technology} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;

// className={
//   id % 2 == 0
//     ? { ...projectStyle.imgStyle, order: 1 }
//     : { ...projectStyle.imgStyle, order: 0 }
// }

// className={
//   id % 2 == 0
//     ? { ...projectStyle.detailContainer, order: 0 }
//     : { ...projectStyle.detailContainer, order: 1 }
// }
