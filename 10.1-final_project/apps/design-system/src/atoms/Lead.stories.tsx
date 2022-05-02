import { Meta, Story } from "@storybook/react";
import React from "react";

import { Lead, LeadProps } from "./Lead";

export default {
  title: "Atoms/Lead",
  component: Lead,
} as Meta;

const LeadTemplate: Story<LeadProps> = (args) => <Lead {...args}>A leading title</Lead>;

export const Default = LeadTemplate.bind({});

export const Bold = LeadTemplate.bind({});
Bold.args = {
  bold: true,
};
