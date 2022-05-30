import { Meta, Story } from "@storybook/react";
import React from "react";

import { Link } from "../atoms/Link";

import { UIList, UIListProps } from "./UIList";

export default {
  title: "Objects/UIList",
  component: UIList,
} as Meta;

const Template: Story<UIListProps> = (args) => (
  <UIList {...args}>
    <Link href="http://example.com">An item</Link>
    <Link href="http://example.com">Another item</Link>
    <Link href="http://example.com">A third item</Link>
  </UIList>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  mode: "horizontal",
};

export const Vertical = Template.bind({});
Vertical.args = {
  mode: "vertical",
};
