import { Meta, Story } from "@storybook/react";
import React from "react";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}></Button>;

export const Default = Template.bind({});
Default.args = {
  children: "Suscribirse",
};
