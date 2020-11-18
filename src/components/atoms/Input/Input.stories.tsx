import React from "react";
import Input from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Input",
  component: Input,
  decorators: [withKnobs],
};

export const Base = () => {
  return <Input placeholder="입력하세요!" />;
};

Base.story = {
  name: "Default",
};
