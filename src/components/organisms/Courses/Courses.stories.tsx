import React from "react";
import Courses from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "organisms/Courses",
  component: Courses,
  decorators: [withKnobs],
};

export const Base = () => {
  const data = [
    {
      name: "알고리즘및실습",
      classNumber: "003",
      professor: "국형준",
      isMajor: true,
    },
    {
      name: "컴퓨터구조",
      classNumber: "001",
      professor: "송상훈",
      isMajor: true,
    },
    {
      name: "ES-디지털스토리텔링",
      classNumber: "001",
      professor: "국형준",
      isMajor: true,
    },
    {
      name: "English Reading Practice 1",
      classNumber: "011",
      professor: "Jordan",
      isMajor: false,
    },
  ];
  return <Courses data={data} />;
};

Base.story = {
  name: "Default",
};
