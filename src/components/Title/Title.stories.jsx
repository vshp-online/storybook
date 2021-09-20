import React from "react";

import { Title } from "./Title";

export default {
  title: "Title",
  component: Title,
  argTypes: {
    type: {
      options: ["h1", "h2", "block"],
      control: { type: "radio" },
    },
    decor: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Title {...args}>Title</Title>;

export const Default = Template.bind({});
Default.args = {
  type: "h1",
  decor: true,
};
