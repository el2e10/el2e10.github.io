import React from "react";
import TechnologyItem from "./TechnologyItem";

export const Work = ({ company, date, details, technolgy }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-medium">{company}</h3>
      <p>{date}</p>
      <p>{details}</p>
    </div>
  );
};

export default Work;
