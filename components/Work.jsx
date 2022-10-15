import React from "react";
import TechnologyItem from "./TechnologyItem";

export const Work = ({ company, date, details, technologies }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-medium">{company}</h3>
      <p className="text-xs text-slate-600 font-light">{date}</p>
      <ul className="list-disc list-inside mt-2">
        {details.map((detail) => {
          return <li className="capitalize font-normal">{detail}</li>;
        })}
      </ul>
      {/* <p className="pt-2 font-normal capitalize">{details}</p> */}
      <div className="flex space-x-2 pt-2">
        {technologies.map((technology) => {
          return <TechnologyItem text={technology} />;
        })}
      </div>
    </div>
  );
};

export default Work;
