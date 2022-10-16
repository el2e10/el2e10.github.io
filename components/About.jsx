import React from "react";
import aboutStyle from "../styles/About.module.css";

const About = () => {
  return (
    <div className="mt-6 space-y-3">
      <p className="text-4xl underline font-semibold">About Me</p>
      <div className="flex space-x-8">
        <div className="flex-2">
          <p>
            I am passionate about Machine Learning especially, NLP. My
            background is in Artificial Intelligence and Data Science. Currently
            I am working as an AI research inter at collabll. I worked as a
            Machine learing Intern at TCS for 6 months. At TCS I working on
            building chatbots for websites. Before starting my career in AI I
            worked as a software engineer at a e-comerce company called Evelor
            Corporations.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li className="mt-1">
              💼 Right now, I am working on building a question answering system
              for Indian law.
            </li>
          </ul>
        </div>
        <div className="flex flex-1 gap-4 flex-col">
          <div className={aboutStyle.cv_box} />
          <a
            className="bg-slate-900 rounded-2xl p-2 text-white text-sm text-center"
            href="https://drive.google.com/file/d/1DaKbAEkl7huo01GVjIL5tdbhdmATkEX6/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
