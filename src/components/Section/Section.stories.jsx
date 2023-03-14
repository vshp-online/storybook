import React from "react";

import { Section } from "./Section";

export default {
  title: "Section",
  component: Section,
  argTypes: {
    coverType: {
      options: ["", "white", "light"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Section {...args}>Title</Section>;

export const Default = Template.bind({});

export const SectionWithBorder = Template.bind({});
SectionWithBorder.args = {
  border: true,
};

export const SectionCover = Template.bind({});
SectionCover.args = {
  coverSrc: "https://picsum.photos/id/1/400/400",
};

export const SectionCoverWhite = Template.bind({});
SectionCoverWhite.args = {
  coverSrc: "https://picsum.photos/id/1/400/400",
  coverType: "white",
};

export const SectionCoverLight = Template.bind({});
SectionCoverLight.args = {
  coverSrc: "https://picsum.photos/id/1/400/400",
  coverType: "light",
};
