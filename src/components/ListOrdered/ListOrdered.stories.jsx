import React from "react";
import { ListOrdered } from "./ListOrdered";
import ListOrderedDoc from "./List-Ordered-Doc.mdx";

export default {
  title: "ListOrdered",
  component: ListOrdered,
  parameters: {
    docs: {
      page: ListOrderedDoc,
    },
  },
};

const Template = (args) => (
  <ListOrdered {...args}>
    <ListOrdered.Item>
      <div>content</div>
    </ListOrdered.Item>
    <ListOrdered.Item>content</ListOrdered.Item>
    <ListOrdered.Item>
      <div>content</div>
    </ListOrdered.Item>
  </ListOrdered>
);

export const Default = Template.bind({});
export const ListOrderedTwoColumnsLg = Template.bind({});
ListOrderedTwoColumnsLg.args = {
  isTwoColumns: true,
};
export const ListOrderedThreeColumnsLg = Template.bind({});
ListOrderedThreeColumnsLg.args = {
  isThreeColumns: true,
};
