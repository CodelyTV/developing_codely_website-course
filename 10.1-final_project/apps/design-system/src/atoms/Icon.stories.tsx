import { Meta, Story } from "@storybook/react";
import React from "react";

import { Icon, IconProps } from "./Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  icon: "codely",
};
