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
          videoSrc: "/story.mp4",
          posterSrc: "/story.png",
        },
      ]}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
