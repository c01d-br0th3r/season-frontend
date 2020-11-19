import React from "react";
import Image from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/Image",
  component: Image,
  decorators: [withKnobs],
};

export const Base = () => {
  return (
    <Image
      width="100px"
      height="100px"
      src="https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg"
      alt="user"
      border="1px solid #c2c2c2"
      radius="50px"
    />
  );
};

Base.story = {
  name: "Default",
};
