import React from "react";
import { ListDescription } from "./ListDescription";
import ListDescriptionDoc from "./List-Description-Doc.mdx";

export default {
  title: "ListDescription",
  component: ListDescription,
  parameters: {
    docs: {
      page: ListDescriptionDoc,
    },
  },
};

const Template = (args) => (
  <ListDescription {...args}>
    <ListDescription.Item title="List Description" description="List Description" />
    <ListDescription.Item title="List Description" description="List Description" />
  </ListDescription>
);

export const Default = Template.bind({});
