import { Meta, Story } from "@storybook/react";
import React from "react";

import { Select, SelectProps } from "./Select";

export default {
  title: "Atoms/Forms/Select",
  component: Select,
} as Meta;

const SelectTemplate: Story<SelectProps> = (args) => (
  <Select {...args} label="Favorite sticker" id="select">
    <option value="" disabled selected>
      Choose…
    </option>
    <option value="pineapple">Pineapple</option>
    <option value="stormtrooper">Stormtrooper</option>
    <option value="android">Android</option>
    <option value="ufo">UFO</option>
  </Select>
);

export const Default = SelectTemplate.bind({});
Default.args = {
  size: "medium",
};

export const Small = SelectTemplate.bind({});
Small.args = {
  size: "small",
};

export const WithHiddenLabel = SelectTemplate.bind({});
WithHiddenLabel.args = {
  hideLabel: true,
};
