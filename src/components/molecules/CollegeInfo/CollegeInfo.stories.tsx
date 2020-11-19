import React from "react";
import CollegeInfo from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "molecules/CollegeInfo",
  component: CollegeInfo,
  decorators: [withKnobs],
};

export const Base = () => {
  return (
    <CollegeInfo
      profileImg="https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg"
      profileAlt="user"
      name="이찬형"
      studentId="17011550"
      college="소프트웨어융합대학"
      department="컴퓨터공학과"
      grade="2"
      hashtags={["WEB", "Frontend", "React"]}
    />
  );
};

Base.story = {
  name: "Default",
};
