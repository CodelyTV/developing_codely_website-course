import { Meta, Story } from "@storybook/react";
import React from "react";

import { Container } from "../objects/Container";
import { Colors } from "../tokens/colors";

import { CourseCard, CourseCardProps } from "./CourseCard";

export default {
  title: "Molecules/CourseCard",
  component: CourseCard,
} as Meta;

const course = {
  emoji: "🌪️",
  title: "Web performance",
  authors: [
    {
      name: "Nino Dafonte",
      image: "/avatar1.jpg",
    },
    {
      name: "Núria Soriano",
      image: "/avatar2.jpg",
    },
  ],
  isNew: true,
  tags: ["javascript", "css"],
  sticker: "/course-sticker.png",
  summary:
    "Consigue desarrollar software fácil de mantener, desacoplado, y tolerante a cambios con los principios SOLID. Aprenderás de forma práctica, amena, y con ejemplos de código 🤘",
  url: "https://pro.codely.tv",
  color: "green" as Colors,
};

const Template: Story<CourseCardProps> = (args) => (
  <Container>
    <div style={{ maxWidth: "25rem" }}>
      <CourseCard {...args} course={course} />
    </div>
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
