import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { Colors } from "../../../src/sections/courses/Colors";
import { Course } from "../../../src/sections/courses/useCourses";

import { AuthorMother } from "./AuthorMother";
import { CategoryMother } from "./CategoryMother";

function getRandomColor() {
  const colors: Colors[] = ["green", "pink", "violet", "yellow"];
  const index = Math.floor(Math.random() * colors.length - 1);

  return colors[index] as Colors;
}

function getRandomEmoji() {
  const emojis = ["🎉", "💃", "🤖", "🪅", "⚛️"];
  const index = Math.floor(Math.random() * emojis.length - 1);

  return emojis[index];
}

const CourseFactory = Factory.define<Course>(() => ({
  emoji: getRandomEmoji(),
  title: faker.lorem.sentence(),
  summary: faker.lorem.sentences(),
  isNew: faker.datatype.boolean(),
  url: faker.internet.url(),
  sticker: faker.image.cats(),
  slug: faker.datatype.string(10),
  color: getRandomColor(),
  categories: CategoryMother.createSlugList(1),
  authors: AuthorMother.createList(2),
}));

export const CourseMother = {
  create: (params?: Partial<Course>): Course => {
    return CourseFactory.build(params);
  },
  createList: (length = 5): Course[] => {
    return CourseFactory.buildList(length);
  },
};
