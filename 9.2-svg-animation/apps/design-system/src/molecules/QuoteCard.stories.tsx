import { Meta, Story } from "@storybook/react";
import React from "react";

import { Container } from "../objects/Container";

import { QuoteCard, QuoteCardProps } from "./QuoteCard";

export default {
  title: "Molecules/QuoteCard",
  component: QuoteCard,
} as Meta;

const author = {
  name: "Nic Cage",
  position: "Fullstack Developer",
  avatar: "https://www.placecage.com/100/100",
};

const Template: Story<QuoteCardProps> = (args) => (
  <Container>
    <QuoteCard
      {...args}
      quote="CodelyTV Pro me permite estar al dia sobre tendencias y buenas prácticas tanto de la tecnologia como de su gestión"
      author={author}
    />
  </Container>
);

export const Variation1 = Template.bind({});
Variation1.args = {
  variation: 1,
};

export const Variation2 = Template.bind({});
Variation2.args = {
  variation: 2,
};

export const Variation3 = Template.bind({});
Variation3.args = {
  variation: 3,
};
