import React from "react";
import skillStyle from "../styles/Skill.module.css";
import Image from "next/image";

const Skill = ({ icon, url }) => {
  return (
    <div className={skillStyle.container}>
      <a href={url} target="_blank">
        <Image src={icon} width={64} height={64} />
      </a>
    </div>
  );
};

export default Skill;
