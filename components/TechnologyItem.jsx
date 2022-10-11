import React from "react";
import technologyItemStyle from "../styles/TechnologyItem.module.css";

const TechnologyItem = ({ text }) => {
  return (
    <div className={technologyItemStyle.container}>
      <h5 className={technologyItemStyle.textStyle}>{text}</h5>
    </div>
  );
};

export default TechnologyItem;
