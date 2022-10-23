import React from "react";
import Skill from "./Skill";
import skillListStyle from "../styles/SkillList.module.css";
import pythonImg from "../public/images/python.svg";
import tensorflowImg from "../public/images/tensorflow.svg";
import pandasImg from "../public/images/pandas.svg";
import pytorchImg from "../public/images/pytorch.svg";
import sklearnImg from "../public/images/scikit-learn.svg";
import mongodbImg from "../public/images/mongodb.svg";
import reactImg from "../public/images/react.svg";
import jsImg from "../public/images/js.svg";
import flaskImg from "../public/images/flask.svg";

const SkillList = () => {
  return (
    <div className="flex flex-col mt-8 md:mt-16 space-y-4 mx-8 md:mx-16 lg:mx-32 lg:px-32">
      <p className="text-2xl md:text-4xl lg:text-4xl underline font-semibold">
        Skills
      </p>
      <div className="grid grid-cols-3 grid-rows-3 gap-y-8 md:grid-cols-8 md:grid-rows-1 lg:grid-cols-8 lg:grid-rows-1">
        <Skill
          url="https://www.tensorflow.org/"
          icon={tensorflowImg}
          title="TensorFlow"
        />
        <Skill
          url="https://pandas.pydata.org/"
          icon={pandasImg}
          title="Pandas"
        />
        <Skill url="https://pytorch.org/" icon={pytorchImg} title="PyTorch" />
        <Skill
          url="https://scikit-learn.org/stable/"
          icon={sklearnImg}
          title="Scikit-Learn"
        />
        <Skill
          url="https://www.mongodb.com/"
          icon={mongodbImg}
          title="MongoDB"
        />
        <Skill
          url="https://flask.palletsprojects.com/en/2.2.x/"
          icon={flaskImg}
          title="Flask"
        />
        <Skill url="https://reactjs.org/" icon={reactImg} title="ReactJS" />
        <Skill
          url="https://www.javascript.com/"
          icon={jsImg}
          title="Javascript"
        />
        <Skill url="https://www.python.org/" icon={pythonImg} title="Python" />
      </div>
    </div>
  );
};

export default SkillList;
