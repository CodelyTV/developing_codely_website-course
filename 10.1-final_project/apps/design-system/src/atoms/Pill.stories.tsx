import { Meta, Story } from "@storybook/react";
import React from "react";

import { Pill, PillProps } from "./Pill";

export default {
  title: "Atoms/Pill",
  component: Pill,
} as Meta;

const ButtonTemplate: Story<PillProps> = (args) => <Pill {...args}>Pill</Pill>;

export const Default = ButtonTemplate.bind({});
Default.args = {
  isActive: false,
};
export const Active = ButtonTemplate.bind({});
Active.args = {
  isActive: true,
};
