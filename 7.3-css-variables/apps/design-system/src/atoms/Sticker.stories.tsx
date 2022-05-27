import { Meta, Story } from "@storybook/react";
import React from "react";

import { Sticker, StickerProps } from "./Sticker";

export default {
  title: "Atoms/Sticker",
  component: Sticker,
} as Meta;

const Template: Story<StickerProps> = (args) => <Sticker {...args} width={192} height={192} />;

export const Default = Template.bind({});
Default.args = {
  sticker: "ufo",
};
