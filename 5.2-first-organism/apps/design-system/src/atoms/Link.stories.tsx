import { Meta, Story } from "@storybook/react";
import React from "react";

import { Link, LinkProps } from "./Link";

export default {
  title: "Atoms/Link",
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} href="https://codely.tv" />;

export const Primary = Template.bind({});
Primary.args = {
  mode: "primary",
  children: "Link",
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "secondary",
  children: "Link",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  mode: "tertiary",
  children: "Link",
};

export const Inverted = Template.bind({});
Inverted.args = {
  mode: "inverted",
  children: "Link",
};
