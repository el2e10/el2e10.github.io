import React from "react";
import projectStyle from "../styles/Project.module.css";
import TechnologyItem from "./TechnologyItem";
import Image from "next/image";

const Project = (props) => {
  const { image, title, date, details, technologies, link, id } = props;

  return (
    <div className="flex flex-row space-x-8">
      <div className="flex-1">
        <Image src={image} className="rounded-md" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-xs text-slate-400 font-light">{date}</p>
        <p className="pt-2 font-normal">{details}</p>
        <div className="flex pt-2 space-x-2">
          {technologies.map((technology) => {
            return <TechnologyItem text={technology} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
