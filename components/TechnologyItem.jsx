import React from "react";

const TechnologyItem = ({ text }) => {
  return (
    <div className="flex bg-slate-800 rounded-2xl text-white text-sm justify-center items-center">
      <p className="m-2 mx-4 text-center">{text}</p>
    </div>
  );
};

export default TechnologyItem;
