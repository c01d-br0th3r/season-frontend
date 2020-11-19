import React from "react";
import CourseList from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "molecules/CourseList",
  component: CourseList,
  decorators: [withKnobs],
};

export const Base = () => {
  const data = {
    name: "알고리즘및실습",
    classNumber: "003",
    professor: "국형준",
    isMajor: true,
  };
  return <CourseList data={data} />;
};

Base.story = {
  name: "Default",
};
