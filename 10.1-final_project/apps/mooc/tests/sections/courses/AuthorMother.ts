import faker from "@faker-js/faker";
import { Factory } from "fishery";

import { Author } from "../../../src/sections/courses/useCourses";

const AuthorFactory = Factory.define<Author>(() => ({
  name: faker.name.firstName(),
  image: faker.image.avatar(),
}));

export const AuthorMother = {
  create: (params?: Partial<Author>): Author => {
    return AuthorFactory.build(params);
  },
  createList: (length = 5): Author[] => {
    return AuthorFactory.buildList(length);
  },
};
