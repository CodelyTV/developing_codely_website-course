import { Meta, Story } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";

import { Avatar, AvatarProps } from "./Avatar";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/NeONySR9xxdUEw1xkdzZDI/%F0%9F%9A%80-UI-Web-%2B-DS?node-id=708%3A3261",
    },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} src="https://www.placecage.com/100/100" />;

export const Medium = Template.bind({});
