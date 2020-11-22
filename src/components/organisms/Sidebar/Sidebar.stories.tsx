import React from "react";
import Sidebar from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "organisms/Sidebar",
  component: Sidebar,
  decorators: [withKnobs],
};

export const Base = () => {
  return (
    <Sidebar
      profileImg="https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg"
      profileAlt="user"
      name="이찬형"
      college="소프트웨어융합대학"
      department="컴퓨터공학과"
      courseList={["a", "b"]}
    />
  );
};

Base.story = {
  name: "Default",
};
