import "reflect-metadata";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Courses } from "../../../src/sections/courses/Courses";
import { Category } from "../../../src/sections/courses/useCategories";
import { Course } from "../../../src/sections/courses/useCourses";

import { CategoryMother } from "./CategoryMother";
import { CourseMother } from "./CourseMother";

describe("Courses component", () => {
  it("shows all courses by default", () => {
    const courses: Course[] = CourseMother.createList(2);
    const categories: Category[] = CategoryMother.createList();

    render(<Courses courses={courses} categories={categories} />);

    expect(screen.getByRole("heading", { name: new RegExp(courses[0].title, "i") })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: new RegExp(courses[1].title, "i") })).toBeInTheDocument();
  });

  it("filters by the selected category", () => {
    const courses: Course[] = [
      CourseMother.create({ categories: ["software-architecture"] }),
      CourseMother.create({ categories: ["frontend"] }),
    ];
    const categories: Category[] = [
      CategoryMother.create({ slug: "software-architecture" }),
      CategoryMother.create({ slug: "frontend" }),
      CategoryMother.create({ slug: "tooling" }),
    ];

    render(<Courses courses={courses} categories={categories} />);

    const categoryButton = screen.getByRole("button", { name: categories[0].shortName });
    userEvent.click(categoryButton);

    expect(screen.getByRole("heading", { name: new RegExp(courses[0].title, "i") })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: new RegExp(courses[1].title, "i") })).not.toBeInTheDocument();
  });

  it("shows no courses if selected category has no courses", () => {
    const courses: Course[] = [
      CourseMother.create({ categories: ["software-architecture"] }),
      CourseMother.create({ categories: ["frontend"] }),
    ];
    const categories: Category[] = [
      CategoryMother.create({ slug: "software-architecture" }),
      CategoryMother.create({ slug: "frontend" }),
      CategoryMother.create({ slug: "tooling" }),
    ];

    render(<Courses courses={courses} categories={categories} />);

    const categoryButton = screen.getByRole("button", { name: categories[2].shortName });
    userEvent.click(categoryButton);

    expect(screen.queryByRole("heading", { name: new RegExp(courses[0].title, "i") })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: new RegExp(courses[1].title, "i") })).not.toBeInTheDocument();
  });
});
