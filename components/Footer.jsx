import React from "react";
import Image from "next/image";
import githubImg from "../public/images/github.png";
import mailImg from "../public/images/mail.svg";
import linkedinImg from "../public/images/linkedin.png";

const Footer = () => {
  return (
    <div>
      <hr className="mx-8 md:mx-16 lg:mx-64 mb-4" />
      <div className="flex justify-center gap-x-6 items-center mx-8 md:mx-16 lg:mx-32">
        <a
          href="mailto:eldhoittangeorge@gmail.com"
          className="w-8 h-8"
          target="_blank"
          rel="noreferrer"
          title="eldhoittangeorge@gmail.com"
          alt="Gmail log"
        >
          <Image src={mailImg} />
        </a>
        <a
          href="https://github.com/eldhoittangeorge"
          className="w-8 h-8 mb-3"
          target="_blank"
          rel="noreferrer"
          title="Github"
          alt="Github logo"
        >
          <Image src={githubImg} />
        </a>
        <a
          className="w-8 h-8"
          href="https://www.linkedin.com/in/eldhoittangeorge/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          alt="LinkedIn log"
        >
          <Image src={linkedinImg} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
