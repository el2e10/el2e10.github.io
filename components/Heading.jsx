import React from "react";
import headingStyle from "../styles/Heading.module.css";

const Heading = () => {
  return (
    <div>
      <p className={headingStyle.hiStyle}>Hi I'm</p>
      <h1 className={headingStyle.nameStyle}>Eldho Ittan george</h1>
    </div>
  );
};

export default Heading;
