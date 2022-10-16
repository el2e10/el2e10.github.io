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
          details={[
            " Led and developed a team to create a chatbot for the college Muthoot Institute of Technology & Science (mgmits.ac.in) to reduce telephonic enquiries.",
            "Successfully deployed the chatbot on the Muthoot Institute of Technology & Science website, which significantly reduced telephonic enquiries.",
          ]}
          technologies={[
            "Python",
            "GCP",
            "NLP",
            "Scikit-learn",
            "Deep Learning",
          ]}
          image={mitsChatbotImage}
        />
      </div>
    </div>
  );
};

export default ProjectList;
