import { Meta, Story } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/NeONySR9xxdUEw1xkdzZDI/%F0%9F%9A%80-UI-Web-%2B-DS?node-id=708%3A3094",
    },
  },
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
  <Button href="https://codely.tv" mode="primary" target="_blank">
    Conoce los cursos
  </Button>
);
