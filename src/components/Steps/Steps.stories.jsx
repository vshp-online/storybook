import React from "react";
import { Steps } from "./Steps";
import StepsDoc from "./Steps-Doc.mdx";

export default {
  title: "Steps",
  component: Steps,
  parameters: {
    docs: {
      page: StepsDoc,
    },
  },
};

const Template = (args) => (
  <Steps {...args}>
    <Steps.Item title="title" description="description">
      <div>content</div>
    </Steps.Item>
    <Steps.Item title="title" description="description" />
  </Steps>
);

export const Default = Template.bind({});
