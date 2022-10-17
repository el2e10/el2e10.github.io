import React from "react";
import TechnologyItem from "./TechnologyItem";
import Image from "next/image";

const Project = (props) => {
  const { image, title, date, details, technologies, link, key } = props;

  return (
    <div className="flex flex-row space-x-8">
      <div className="flex-1">
        <Image
          src={image}
          className="rounded-md"
          title={title}
          alt={"Image of the project" + title}
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-medium">{title}</h3>
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
        <div className="flex pt-2 space-x-2">
          {technologies.map((technology) => {
            return <TechnologyItem key={key} text={technology} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
