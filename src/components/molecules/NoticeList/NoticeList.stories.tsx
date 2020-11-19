import React from "react";
import NoticeList from "./index";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "molecules/NoticeList",
  component: NoticeList,
  decorators: [withKnobs],
};

export const Base = () => {
  const data = {
    id: 1,
    title: "Season 이용 안내",
    writter: "관리자",
    time: "2020/11/19",
    content: "잘 쓰세요",
  };
  return <NoticeList data={data} />;
};

Base.story = {
  name: "Default",
};
