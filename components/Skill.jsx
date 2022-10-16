import React from "react";
import Image from "next/image";

const Skill = ({ icon, url, title }) => {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        className="w-16 h-16 flex justify-center items-center"
      >
        <Image src={icon} title={title} />
      </a>
    </div>
  );
};

export default Skill;
