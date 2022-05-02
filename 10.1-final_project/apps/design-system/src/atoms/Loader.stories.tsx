import { Meta, Story } from "@storybook/react";
import React from "react";

import { Loader } from "./Loader";

export default {
  title: "Atoms/Loader",
  component: Loader,
} as Meta;

const Template: Story = (args) => <Loader {...args} />;

export const Default = Template.bind({});
