import React from "react";
import skillStyle from "../styles/Skill.module.css";
import Image from "next/image";

const Skill = ({ icon, url }) => {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        className="w-16 h-16 flex justify-center items-center"
      >
        <Image src={icon} />
      </a>
    </div>
  );
};

export default Skill;
