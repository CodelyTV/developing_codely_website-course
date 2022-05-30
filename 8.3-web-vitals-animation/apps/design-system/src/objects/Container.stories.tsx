import { Meta, Story } from "@storybook/react";
import React from "react";

import { Container, ContainerProps } from "./Container";

export default {
  title: "Objects/Container",
  component: Container,
} as Meta;

const Template: Story<ContainerProps> = (args) => <Container {...args}>Some content</Container>;

export const ContainerSection = Template.bind({});
ContainerSection.args = {
  tag: "section",
};
