import React from "react";
import { FiExternalLink } from "react-icons/fi";

const About = () => {
  return (
    <div className="mt-8 space-y-3 mx-8 md:mx-16 lg:mx-32 lg:px-32">
      <p className="text-2xl md:text-4xl lg:text-4xl underline font-bold">
        About Me
      </p>
      <div className="flex flex-col">
        <p>
          I am Machine Learning enthusiast and researcher. My background is in
          Artificial Intelligence and Data Science. Currently, I am working as
          an AI Research Intern at collabll. I am working on creating a
          question-answering system for Indian law. This enables the user to
          search for any particular law related to their issues. The question
          answering-system works with most of the Indic languages.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li className="mt-1">
            🧑‍🎓 I am a graduate with a Master&apos;s in Artificial Intelligence
            and Machine Learning
          </li>
          <li className="mt-1">
            🏠 Kerala native, with a passion for Artificial Intelligence
            especially in NLP
          </li>
          <li className="mt-1">
            👨‍💻 Previously I worked as a Machine Learning Intern at TCS for 6
            months. At TCS I worked on building an NLP chatbot for a website.
          </li>
          <li className="mt-1">
            👨‍💻 I also worked as a Data Analyst/Software Engineer at Envelor
            Corporation for 1 year
          </li>
          <li className="mt-1">
            🔮 As for my future, I hope to one day work as an AI researcher in
            an AI focused company
          </li>
          <li className="mt-1">
            ⛰️ In my free time, I read fantasy and fiction books
          </li>
        </ul>
        <div className="flex flex-row justify-center items-center gap-x-2 border-2 border-slate-900 rounded-2xl p-2 mt-3">
          <FiExternalLink />
          <a
            className="text-slate-900 text-md font-bold"
            href="https://drive.google.com/file/d/1DaKbAEkl7huo01GVjIL5tdbhdmATkEX6/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
