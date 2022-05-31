import { Meta, Story } from "@storybook/react";
import React from "react";

import { Avatars, AvatarsProps } from "./Avatars";

export default {
  title: "Molecules/Avatars",
  component: Avatars,
} as Meta;

const Template: Story<AvatarsProps> = (args) => <Avatars {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatars: [
    {
      alt: "Nino Dafonte",
      src: "/avatar1.jpg",
    },
    {
      alt: "Núria Soriano",
      src: "/avatar2.jpg",
    },
  ],
};
