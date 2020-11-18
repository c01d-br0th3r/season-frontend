import React from "react";
import Button from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Button",
  component: Button,
  decorators: [withKnobs],
};

export const Base = () => {
  return <Button>Story</Button>;
};
Base.story = {
  name: "Default",
};
