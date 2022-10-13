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

const SkillList = () => {
  return (
    <div className={skillListStyle.container}>
      <h1 className={skillListStyle.headingStyle}>Skills</h1>
      <div className={skillListStyle.skillListContainer}>
        <Skill url="https://www.python.org/" icon={pythonImg} />
        <Skill url="https://www.tensorflow.org/" icon={tensorflowImg} />
        <Skill url="https://pandas.pydata.org/" icon={pandasImg} />
        <Skill url="https://pytorch.org/" icon={pytorchImg} />
        <Skill url="https://scikit-learn.org/stable/" icon={sklearnImg} />
        <Skill url="https://www.mongodb.com/" icon={mongodbImg} />
        <Skill url="https://reactjs.org/" icon={reactImg} />
        <Skill url="https://www.javascript.com/" icon={jsImg} />
      </div>
    </div>
  );
};

export default SkillList;
