import { Meta, Story } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";

import { ChatCard, ChatCardProps } from "./ChatCard";

export default {
  title: "Molecules/ChatCard",
  component: ChatCard,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/NeONySR9xxdUEw1xkdzZDI/%F0%9F%9A%80-UI-Web-%2B-DS?node-id=708%3A2868",
    },
  },
} as Meta;

const Template: Story<ChatCardProps> = (args) => (
  <>
    <ChatCard {...args} title="✌️ A Chat Card" description="Lorem ipsum dolor sit amet." />
    <ChatCard {...args} title="✨ Another Chat Card" description="Lorem ipsum dolor sit amet." />
  </>
);

export const Default = Template.bind({});
