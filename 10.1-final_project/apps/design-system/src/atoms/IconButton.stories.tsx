import { Meta, Story } from "@storybook/react";
import React from "react";

import { IconButton, IconButtonProps } from "./IconButton";

export default {
  title: "Atoms/IconButton",
  component: IconButton,
} as Meta;

const ButtonTemplate: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const DarkButton = ButtonTemplate.bind({});
DarkButton.args = {
  mode: "dark",
  size: "medium",
  label: "Play",
  icon: "play",
};
export const LightButton = ButtonTemplate.bind({});
LightButton.args = {
  mode: "light",
  size: "medium",
  label: "Play",
  icon: "play",
};

export const AsLink: Story<IconButtonProps> = () => (
  <IconButton href="https://twitch.tv/codelytv" target="_blank" mode="dark" label="Síguenos en Twitch" icon="twitch" />
);
