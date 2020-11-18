import React from "react";
import Label from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Label",
  component: Label,
  decorators: [withKnobs],
};

export const Base = () => {
  return <Label>Story</Label>;
};

Base.story = {
  name: "Default",
};
