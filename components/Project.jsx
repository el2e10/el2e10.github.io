import React from "react";
import projectStyle from "../styles/Project.module.css";
import TechnologyItem from "./TechnologyItem";

const Project = (props) => {
  const { image, title, date, details, technologies, link, id } = props;

  return (
    <div className={projectStyle.container}>
      <img className={projectStyle.imgStyle} src={image} />
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

Project.defaultProps = {
  image: "background.svg",
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
