import { useCategories } from "../courses/useCategories";
import { useCourses } from "../courses/useCourses";

export function useHeadData(): { courses: string; categories: string } {
  const courses = useCourses();
  const categories = useCategories();

  return {
    courses: courses
      .slice(0, 5)
      .map((course) => course.title)
      .join(", "),
    categories: categories
      .slice(0, 5)
      .map((category) => category.shortName)
      .join(", "),
  };
}
