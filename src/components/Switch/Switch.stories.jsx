import React from "react";

import { Switch } from "./Switch";

export default {
  title: "Switch",
  component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: () => {
    console.log("switch");
  },
  defaultChecked: true
};
