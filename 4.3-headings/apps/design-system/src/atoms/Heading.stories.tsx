import { Meta, Story } from "@storybook/react";
import React from "react";

import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Atoms/Heading",
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => (
  <section aria-labelledby="heading">
    <Heading {...args} id="heading">
      This is a heading
    </Heading>
  </section>
);

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};
