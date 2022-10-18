import React from "react";
import resumeThumbnail from "../public/images/Resume_thumbnail.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-8 space-y-3 mx-8 md:mx-16 lg:mx-32">
      <p className="text-4xl underline font-semibold">About Me</p>
      <div className="flex space-x-8 flex-col lg:flex-row md:flex-col">
        <div className="flex-3">
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
        </div>
        <div className="flex flex-2 gap-4 flex-col">
          {/* <Image
            src={resumeThumbnail}
            title="Resume"
            className="disabled md:invisible lg:visible"
            alt="Thumbnail of resume"
          /> */}
          <a
            className="bg-slate-900 rounded-2xl p-2 text-white text-sm text-center mt-6 lg:mt-2"
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
