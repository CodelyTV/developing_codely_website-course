import { Meta, Story } from "@storybook/react";
import React from "react";

import { Label, LabelProps } from "./Label";

export default {
  title: "Atoms/Forms/Label",
  component: Label,
} as Meta;

const LabelTemplate: Story<LabelProps> = (args) => (
  <Label {...args} htmlFor="inputId">
    Label
  </Label>
);

export const Default = LabelTemplate.bind({});
Default.args = {};
