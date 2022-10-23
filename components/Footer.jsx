import React from "react";
import { AiFillMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <hr className="mx-8 md:mx-16 lg:mx-64 mb-2" />
      <div className="flex justify-center gap-x-4 items-center mx-8 md:mx-16 lg:mx-32 mb-2">
        <a
          href="mailto:eldhoittangeorge@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillMail className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/eldhoittangeorge"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/eldhoittangeorge/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
