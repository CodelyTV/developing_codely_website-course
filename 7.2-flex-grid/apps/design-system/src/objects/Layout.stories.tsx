import { Meta, Story } from "@storybook/react";
import React from "react";

import { Container } from "./Container";
import { Layout, LayoutProps } from "./Layout";

export default {
  title: "Objects/Layout",
  component: Layout,
} as Meta;

const Template: Story<LayoutProps> = () => (
  <Layout>
    <Container>This is the first section</Container>
    <Container>The following sections will be spaced with a margin top</Container>
    <Container>See?</Container>
  </Layout>
);

export const Default = Template.bind({});
