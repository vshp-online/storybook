import React from "react";

import { Progress } from "./Progress";

export default {
  title: "Progress",
  component: Progress,
};

const Template = (args) => <Progress {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 30,
};
