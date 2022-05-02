import { Meta, Story } from "@storybook/react";
import React from "react";

import { StoryPlayer, StoryPlayerProps } from "./StoryPlayer";

export default {
  title: "Molecules/StoryPlayer",
  component: StoryPlayer,
} as Meta;

const Template: Story<StoryPlayerProps> = (args) => (
  <div style={{ width: "360px" }}>
    <StoryPlayer
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
  </div>
);

export const Default = Template.bind({});
Default.args = {};
