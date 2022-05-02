import { Meta, Story } from "@storybook/react";
import React from "react";

import { Toggle, ToggleProps } from "./Toggle";

export default {
  title: "Atoms/Forms/Toggle",
  component: Toggle,
} as Meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} id="check" label="Toggle value" onChange={() => {}} />;

export const Default = Template.bind({});
