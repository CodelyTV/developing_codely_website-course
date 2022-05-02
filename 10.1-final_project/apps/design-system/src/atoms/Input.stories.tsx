import { Meta, Story } from "@storybook/react";
import React from "react";

import { Input, InputProps } from "./Input";

export default {
  title: "Atoms/Forms/Input",
  component: Input,
} as Meta;

const InputTemplate: Story<InputProps> = (args) => (
  <Input {...args} label="Nombre y apellidos" placeholder="Nombre y apellidos" id="input" onChange={() => {}} />
);

export const Default = InputTemplate.bind({});
Default.args = {
  size: "medium",
};

export const Small = InputTemplate.bind({});
Small.args = {
  size: "small",
};

export const WithHiddenLabel = InputTemplate.bind({});
WithHiddenLabel.args = {
  hideLabel: true,
};
