import { Meta, Story } from "@storybook/react";
import React from "react";

import { Container } from "../objects/Container";

import { ChatCard, ChatCardProps } from "./ChatCard";

export default {
  title: "Molecules/ChatCard",
  component: ChatCard,
} as Meta;

const Template: Story<ChatCardProps> = (args) => (
  <Container>
    <ChatCard {...args} title="✌️ A Chat Card" description="Lorem ipsum dolor sit amet." />
    <ChatCard {...args} title="✨ Another Chat Card" description="Lorem ipsum dolor sit amet." />
  </Container>
);

export const Default = Template.bind({});
