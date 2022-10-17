import React from "react";
import Image from "next/image";

const Skill = ({ icon, url, title }) => {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="w-16 h-16 flex justify-center items-center"
      >
        <Image src={icon} title={title} alt={"Logo of " + title} />
      </a>
    </div>
  );
};

export default Skill;
