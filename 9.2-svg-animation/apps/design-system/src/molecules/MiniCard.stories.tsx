import { Meta, Story } from "@storybook/react";
import React from "react";

import { Container } from "../objects/Container";

import { MiniCard, MiniCardProps } from "./MiniCard";

export default {
  title: "Molecules/MiniCard",
  component: MiniCard,
} as Meta;

const Template: Story<MiniCardProps> = (args) => (
  <Container>
    <MiniCard {...args} title="A Mini Card" description="Lorem ipsum dolor sit amet." />
  </Container>
);

export const Variation1 = Template.bind({});
Variation1.args = {
  variation: 1,
  sticker: "pineapple",
};

export const Variation2 = Template.bind({});
Variation2.args = {
  variation: 2,
  sticker: "ufo",
};

export const Variation3 = Template.bind({});
Variation3.args = {
  variation: 3,
  sticker: "android",
};
