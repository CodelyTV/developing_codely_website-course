import { Meta, Story } from "@storybook/react";
import React from "react";

import { ChangelogCard, ChangelogCardProps } from "./ChangelogCard";

export default {
  title: "Molecules/ChangelogCard",
  component: ChangelogCard,
} as Meta;

const Template: Story<ChangelogCardProps> = (args) => (
  <div style={{ maxWidth: "30rem" }}>
    <ChangelogCard
      {...args}
      item={{
        title: "¿Cuánto sabes de CSS? Vamos a jugar a un juego… | #laFunción 7x17",
        platform: "youtube",
        url: "https://youtu.be/Wmn0cWksljw",
        image: "/changelog.png",
        mode: "light",
      }}
    />
  </div>
);

export const Default = Template.bind({});
