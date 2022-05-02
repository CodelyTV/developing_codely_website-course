import { Meta, Story } from "@storybook/react";
import React from "react";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Suscribirse</Button>;

export const Primary = Template.bind({});
Primary.args = {
  mode: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  mode: "tertiary",
};

export const Inverted = Template.bind({});
Inverted.args = {
  mode: "inverted",
};

export const AsLink: Story<ButtonProps> = () => (
  <Button href="https://codely.tv" target="_blank" mode="primary">
    Conoce los cursos
  </Button>
);
