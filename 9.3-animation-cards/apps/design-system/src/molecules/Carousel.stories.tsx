import { Meta, Story } from "@storybook/react";
import React from "react";

import { Container } from "../objects/Container";

import { Carousel, StandardCarouselProps, VirtualizedCarouselProps } from "./Carousel";

export default {
  title: "Molecules/Carousel",
  component: Carousel,
} as Meta;

const style = { width: "300px", height: "300px", background: "#fef878" };

const Template: Story<StandardCarouselProps> = (args) => (
  <Container>
    <Carousel {...args}>
      <div style={style}>slide 1</div>
      <div style={style}>slide 2</div>
      <div style={style}>slide 3</div>
      <div style={style}>slide 4</div>
      <div style={style}>slide 5</div>
      <div style={style}>slide 6</div>
      <div style={style}>slide 7</div>
      <div style={style}>slide 8</div>
    </Carousel>
  </Container>
);

const VirtualizedTemplate: Story<VirtualizedCarouselProps> = (args) => (
  <Container>
    <Carousel {...args}>
      <div style={style}>slide 1</div>
      <div style={style}>slide 2</div>
      <div style={style}>slide 3</div>
      <div style={style}>slide 4</div>
      <div style={style}>slide 5</div>
      <div style={style}>slide 6</div>
      <div style={style}>slide 7</div>
      <div style={style}>slide 8</div>
      <div style={style}>slide 9</div>
      <div style={style}>slide 10</div>
      <div style={style}>slide 11</div>
      <div style={style}>slide 12</div>
      <div style={style}>slide 13</div>
      <div style={style}>slide 14</div>
      <div style={style}>slide 15</div>
    </Carousel>
  </Container>
);

export const Default = Template.bind({});
export const Virtualized = VirtualizedTemplate.bind({});
Virtualized.args = {
  isVirtualized: true,
  itemHeight: 300,
  itemWidth: 324,
};
