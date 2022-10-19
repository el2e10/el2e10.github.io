import React from "react";
import Project from "./Project";
import mitsChatbotImage from "../public/images/Maac.jpg";

const ProjectList = () => {
  return (
    <div className="flex flex-col mt-8 space-y-4 mx-8 md:mx-16 lg:mx-32 mb-16 lg:px-32">
      <p className="text-2xl md:text-4xl lg:text-4xl space-x-8 underline font-bold">
        Projects
      </p>
      <div>
        <Project
          title="MITS Chatbot"
          key={1}
          date="April - July 2022"
          details={[
            " Lead a team for creating a chatbot for the college Muthoot Institute of Technology & Science (mgmits.ac.in) to reduce telephonic enquiries.",
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
