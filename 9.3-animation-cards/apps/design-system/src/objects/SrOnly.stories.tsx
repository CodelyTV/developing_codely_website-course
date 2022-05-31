import { Meta, Story } from "@storybook/react";
import React from "react";

import { SrOnly, SrOnlyProps } from "./SrOnly";

export default {
  title: "Objects/SrOnly",
  component: SrOnly,
} as Meta;

const Template: Story<SrOnlyProps> = () => (
  <>
    SrOnly component will render a text only visible to screen readers:
    <SrOnly>This text is not visible to the human eye</SrOnly>
  </>
);

export const Default = Template.bind({});
