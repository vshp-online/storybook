import React from "react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    view: {
      options: ["primary", "outline"],
      control: { type: "radio" },
    },
  },
};

const ClipSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <path d="M16.6,29.1c-1.8,0-3.6-0.7-4.9-2c-2.7-2.7-2.7-7.2,0-9.9l4.7-4.7c0.5-0.5,1.3-0.5,1.9,0c0.5,0.5,0.5,1.3,0,1.9L13.5,19c-1.7,1.7-1.7,4.5,0,6.2c1.7,1.7,4.5,1.7,6.2,0l7.4-7.4c0.5-0.5,0.7-1.1,0.7-1.7c0-0.7-0.3-1.3-0.7-1.7c-1-1-2.5-1-3.5,0l-7.4,7.4c-0.2,0.2-0.2,0.6,0,0.9c0.2,0.2,0.6,0.2,0.9,0l4.7-4.7c0.5-0.5,1.3-0.5,1.9,0c0.5,0.5,0.5,1.3,0,1.9l-4.7,4.7c-1.3,1.3-3.3,1.3-4.6,0c-0.6-0.6-0.9-1.4-0.9-2.3s0.3-1.7,0.9-2.3l7.4-7.4c2-2,5.2-2,7.2,0c1,1,1.5,2.2,1.5,3.6c0,1.4-0.5,2.6-1.5,3.6L21.5,27C20.2,28.4,18.4,29.1,16.6,29.1z" />
  </svg>
);

const Template = (args) => <Button {...args}>Button</Button>;

const TemplateWithIcon = (args) => <Button {...args}>{ClipSvg}</Button>;

const TemplateLink = (args) => (
  <Button {...args} target="_blank" rel="noopener noreferrer">Link</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  view: "primary",
};

export const Outline = Template.bind({});
Outline.args = {
  view: "outline",
};

export const CornersSquare = Template.bind({});
CornersSquare.args = {
  view: "primary",
  corners: "square",
};

export const MaxWidthOnMobile = Template.bind({});
MaxWidthOnMobile.args = {
  view: "primary",
  maxWidth: true,
};

export const SmallWithIcon = TemplateWithIcon.bind({});
SmallWithIcon.args = {
  view: "primary",
  size: "small",
  icon: true,
};

export const Link = TemplateLink.bind({});
Link.args = {
  view: "primary",
  href: "https://www.facebook.com/vshponline",
};
