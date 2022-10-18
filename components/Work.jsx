import React from "react";
import TechnologyItem from "./TechnologyItem";

export const Work = ({ company, date, details, technologies, key }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-medium">{company}</h3>
      <p className="text-xs text-slate-600 font-light">{date}</p>
      <ul className="list-disc list-inside mt-2">
        {details.map((detail) => {
          return (
            <li key={key} className="capitalize font-normal">
              {detail}
            </li>
          );
        })}
      </ul>
      <div className="grid grid-rows-2 grid-cols-3 pt-2 gap-x-2 gap-y-2 md:flex">
        {technologies.map((technology) => {
          return <TechnologyItem key={key} text={technology} />;
        })}
      </div>
    </div>
  );
};

export default Work;
