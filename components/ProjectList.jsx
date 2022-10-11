import React from "react";
import projectListStyle from "../styles/ProjectList.module.css";
import Project from "./Project";

const ProjectList = () => {
  return (
    <div className={projectListStyle.container}>
      <h1 className={projectListStyle.headingStyle}>Projects</h1>
      <Project
        title="F Mangaer"
        id={1}
        date="May - December 2019"
        details="A web application that helps to manage your class Scheduling and
          Deadlines. It is a full solution with Admin and Client Interface to
          keep everything related to assignment and exam notices and class links
          and info in one place. It is being used by my classmates 50+ members
          are using regularly. It made their life easier and hazzle free"
        technologies={["git", "java", "python"]}
      />
      <Project
        title="F Mangaer"
        id={2}
        date="May - December 2019"
        details="A web application that helps to manage your class Scheduling and
          Deadlines. It is a full solution with Admin and Client Interface to
          keep everything related to assignment and exam notices and class links
          and info in one place. It is being used by my classmates 50+ members
          are using regularly. It made their life easier and hazzle free
 "
        technologies={["git", "java", "python"]}
      />
      <Project
        title="F Mangaer"
        id={3}
        date="May - December 2019"
        details="A web application that helps to manage your class Scheduling and
          Deadlines. It is a full solution with Admin and Client Interface to
          keep everything related to assignment and exam notices and class links
          and info in one place. It is being used by my classmates 50+ members
          are using regularly. It made their life easier and hazzle free
 "
        technologies={["git", "java", "python"]}
      />
      {/* <div>
        <h3>MITS Chatbot</h3>
        <h6>May - December 2019</h6>
        <p>
          A web application that helps to manage your class Scheduling and
          Deadlines. It is a full solution with Admin and Client Interface to
          keep everything related to assignment and exam notices and class links
          and info in one place. It is being used by my classmates 50+ members
          are using regularly. It made their life easier and hazzle free
        </p>
      </div>
      <div>
        <h3>NLP Text Anotator</h3>
        <h6>May - December 2019</h6>
        <p>
          A web application that helps to manage your class Scheduling and
          Deadlines. It is a full solution with Admin and Client Interface to
          keep everything related to assignment and exam notices and class links
          and info in one place. It is being used by my classmates 50+ members
          are using regularly. It made their life easier and hazzle free
        </p>
      </div> */}
    </div>
  );
};

export default ProjectList;
