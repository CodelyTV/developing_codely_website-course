import { Meta, Story } from "@storybook/react";
import React from "react";

import { Container } from "../objects/Container";

import { Carousel, CarouselProps } from "./Carousel";

export default {
  title: "Molecules/Carousel",
  component: Carousel,
} as Meta;

const style = { width: "300px", height: "300px", background: "#fef878" };

const Template: Story<CarouselProps> = (args) => (
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

export const Default = Template.bind({});
