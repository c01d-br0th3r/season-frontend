import React from "react";
import MySocial from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "organisms/MySocial",
  component: MySocial,
  decorators: [withKnobs],
};

export const Base = () => {
  const data = [
    {
      id: 1,
      title: "내 질문1",
      link: "#",
    },
    {
      id: 2,
      title: "내 질문2",
      link: "#",
    },
    {
      id: 3,
      title: "내 질문3",
      link: "#",
    },
  ];
  return <MySocial data={data} />;
};

Base.story = {
  name: "Default",
};
