import React from "react";
import Notices from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "organisms/Notices",
  component: Notices,
  decorators: [withKnobs],
};

export const Base = () => {
  const data = [
    {
      id: 1,
      title: "Season 이용 안내",
      writter: "관리자",
      time: "2020/11/09",
      content: "잘 쓰세요!",
    },
    {
      id: 2,
      title: "Season 이용 안내1",
      writter: "관리자",
      time: "2020/11/09",
      content: "잘 쓰세요!",
    },
    {
      id: 3,
      title: "Season 이용 안내2",
      writter: "관리자",
      time: "2020/11/09",
      content: "잘 쓰세요!",
    },
    {
      id: 4,
      title: "Season 이용 안내3",
      writter: "관리자",
      time: "2020/11/09",
      content: "잘 쓰세요!",
    },
  ];
  return <Notices data={data} />;
};

Base.story = {
  name: "Default",
};
