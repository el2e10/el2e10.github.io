import React from "react";

const TechnologyItem = ({ text }) => {
  return (
    <div className="flex bg-slate-800 rounded-2xl text-white text-sm text-center">
      <p className="m-2">{text}</p>
    </div>
  );
};

export default TechnologyItem;
