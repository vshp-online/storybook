import React from "react";
import { Collapse } from "./Collapse";
import CollapseDoc from "./Collapse-Doc.mdx";

export default {
  title: "Collapse",
  component: Collapse,
  parameters: {
    docs: {
      page: CollapseDoc,
    },
  },
};

const Template = (args) => (
  <Collapse {...args}>
    <Collapse.Item header="title" content="content" />
    <Collapse.Item header="title" content="content" />
  </Collapse>
);

export const Default = Template.bind({});
