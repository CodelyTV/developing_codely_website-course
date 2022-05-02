import { Meta, Story } from "@storybook/react";
import React from "react";

import { Slider, SliderProps } from "./Slider";

export default {
  title: "Atoms/Forms/Slider",
  component: Slider,
} as Meta;

const Template: Story<SliderProps> = (args) => <Slider {...args} id="check" label="Toggle value" onChange={() => {}} />;

export const Default = Template.bind({});
