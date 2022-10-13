import React from "react";
import aboutStyle from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <h3 className={aboutStyle.heading}>About Me</h3>
      <div className={aboutStyle.container}>
        <div className={aboutStyle.details}>
          <p>
            Final year Computer Science and Engineering (CSE) student at
            Daffodil International University and Full Stack developer
            proficient in FARM and MERN stack using Next js at its core. I have
            2 years of experience and always engaged in building innovative
            solutions. I am currently doing research (ML and NLP), picking
            projects and building stuffs with JavaScript stacks. In my spare
            time, I explore interesting Algorithms and brainstorm for new Ideas.
          </p>
          <ul>
            <li>💼 Right now, I’m working on my Final Year Project......</li>
            <li>
              💻 On late 2021, I secured 2nd Runner Up in the Intra Hackathon
              Competition at Daffodil International University. Here, my skills
              regarding Full stack Development was showcased
            </li>
            <li>
              📰 In 2020, My team "NURO" was announced Champion in DIU Battle Of
              Minds 2.0. I was the Team Leader and the team was composed of 7
              members. Our Solution was a "Convolutional Neural Network" based
              Chatbot.
            </li>
            <li>
              🚀 On Late 2019, I secured 1rst Runner Up in DIU Take Off
              Programming Contest. I solved 6 problems in 3 hours where it
              showed my skills in C/C++.
            </li>
          </ul>
        </div>
        <div className={aboutStyle.cv_container}>
          <div className={aboutStyle.cv_box} />
          <a
            className={aboutStyle.resumeButton}
            href="https://drive.google.com/file/d/1DaKbAEkl7huo01GVjIL5tdbhdmATkEX6/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
