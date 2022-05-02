import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { Colors } from "../../../src/sections/courses/Colors";
import { Category } from "../../../src/sections/courses/useCategories";

function getRandomColor() {
  const colors: Colors[] = ["green", "pink", "violet", "yellow"];
  const index = Math.floor(Math.random() * colors.length - 1);

  return colors[index] as Colors;
}

const CategoryFactory = Factory.define<Category>(() => ({
  shortName: faker.lorem.sentence(),
  name: faker.lorem.sentence(),
  slug: faker.lorem.slug(),
  ordered: faker.datatype.boolean(),
  color: getRandomColor(),
  starredCourses: [faker.lorem.word()],
}));

export const CategoryMother = {
  create: (params?: Partial<Category>): Category => {
    return CategoryFactory.build(params);
  },
  createList: (length = 3): Category[] => {
    return CategoryFactory.buildList(length);
  },
  createSlugList: (length = 3): string[] => {
    return Array.from({ length }, () => faker.lorem.slug());
  },
};
