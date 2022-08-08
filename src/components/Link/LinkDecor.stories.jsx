import React from "react";

import { LinkDecor } from "./LinkDecor";

export default {
  title: "LinkDecor",
  component: LinkDecor,
};

const Template = (args) => <LinkDecor {...args}>Link</LinkDecor>;

export const Default = Template.bind({});
