import { Meta, Story } from "@storybook/react";
import React from "react";

import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Atoms/Heading",
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args}>This is a heading</Heading>;

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};
