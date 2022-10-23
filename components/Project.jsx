import React from "react";
import TechnologyItem from "./TechnologyItem";
import Image from "next/image";

const Project = (props) => {
  const { image, title, date, details, technologies, link, key } = props;

  return (
    <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-2 md:space-x-8 lg:space-x-8">
      <div>
        <Image
          src={image}
          className="rounded-md"
          title={title}
          alt={"Image of the project" + title}
        />
      </div>
      <div>
        <h3 className="text-lg md:text-xl lg:text-xl font-semibold">{title}</h3>
        <p className="text-xs text-slate-400 font-light">{date}</p>
        <ul className="list-disc list-inside mt-2">
          {details.map((detail) => {
            return (
              <li key={key} className="pt-2 font-normal">
                {detail}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-wrap gap-x-2 gap-y-2 mt-3">
          {technologies.map((technology) => {
            return <TechnologyItem key={key} text={technology} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
