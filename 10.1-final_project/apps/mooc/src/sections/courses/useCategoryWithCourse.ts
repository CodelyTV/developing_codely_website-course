import { Course, useCourses } from "./useCourses";
import { Category, useCategories } from "./useCategories";
import { Colors } from "./Colors";

export interface CategoryWithCourse {
  name: string;
  ordered: boolean;
  starredCourses: Course[];
  color: Colors;
  slug: string;
}

export function useCategoriesWithCourses(): CategoryWithCourse[] {
  const courses = useCourses();
  const categories = useCategories();

  const starredCourses = (category: Category) => {
    return category.starredCourses.map((courseSlug) => {
      const course = courses.find((course) => course.slug === courseSlug);
      if (!course) {
        throw new Error(`Course ${courseSlug} not found`);
      }

      return course;
    });
  };

  return categories.map((category) => ({
    name: category.name,
    ordered: category.ordered,
    starredCourses: starredCourses(category),
    color: category.color,
    slug: category.slug,
  }));
}
