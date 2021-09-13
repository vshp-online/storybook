import React from "react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};

export const Outline = Template.bind({});
Outline.args = {
  type: "outline",
};

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  maxWidth: true,
};
