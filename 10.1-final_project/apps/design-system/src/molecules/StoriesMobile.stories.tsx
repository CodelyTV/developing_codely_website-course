import { Meta, Story } from "@storybook/react";
import React from "react";

import { StoriesMobile, StoriesMobileProps } from "./StoriesMobile";

export default {
  title: "Molecules/StoriesMobile",
  component: StoriesMobile,
} as Meta;

const Template: Story<StoriesMobileProps> = (args) => (
  <StoriesMobile
    {...args}
    stories={[
      {
        title: "Ventajas",
        miniature: "/avatar1.jpg",
        videoSrc: "/story.mp4",
        posterSrc: "/story.png",
      },
      {
        title: "Cosas bonitas",
        miniature: "/avatar1.jpg",
        videoSrc: "/story2.mp4",
        posterSrc: "/story2.png",
      },
    ]}
  />
);

export const Default = Template.bind({});
Default.args = {};
