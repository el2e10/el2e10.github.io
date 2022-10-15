import React from "react";
import Work from "./Work";

const WorkList = () => {
  return (
    <div className="flex flex-col mt-6 space-y-3">
      <h1 className="text-4xl underline font-semibold">Work Experiance</h1>
      <div>
        <Work
          company="Tata Consultancy Services"
          date="Nov, 2021 - May, 2022"
          details=" web application that helps to manage your class Scheduling and
          Deadlines. It is a full solution with Admin and Client Interface to
          keep everything related to assignment and exam notices and class links
          and info in one place. It is being used by my classmates 50+ members
          are using regularly. It made their life easier and hazzle free"
        />
      </div>
    </div>
  );
};

export default WorkList;
