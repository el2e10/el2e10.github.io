import React from "react";
import Project from "./Project";
import mitsChatbotImage from "../public/images/Maac.jpg";

const ProjectList = () => {
  return (
    <div className="flex flex-col mt-6 space-y-4">
      <p className="text-4xl space-x-8 underline font-semibold">Projects</p>
      <div>
        <Project
          title="MITS Chatbot"
          id={1}
          date="April - July 2022"
          details="A web application that helps to manage your class Scheduling and
          Deadlines. It is a full solution with Admin and Client Interface to
          keep everything related to assignment and exam notices and class links
          and info in one place. It is being used by my classmates 50+ members
          are using regularly. It made their life easier and hazzle free"
          technologies={["Python", "GCP", "NLP", "Scikit-learn"]}
          image={mitsChatbotImage}
        />
      </div>
    </div>
  );
};

export default ProjectList;
