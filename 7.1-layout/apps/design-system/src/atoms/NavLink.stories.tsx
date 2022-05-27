import { Meta, Story } from "@storybook/react";
import React from "react";

import { NavLink, NavLinkProps } from "./NavLink";

export default {
  title: "Atoms/NavLink",
  component: NavLink,
} as Meta;

const Template: Story<NavLinkProps> = (args) => <NavLink {...args} href="/" />;

export const Default = Template.bind({});
Default.args = {
  children: "NavLink",
};
