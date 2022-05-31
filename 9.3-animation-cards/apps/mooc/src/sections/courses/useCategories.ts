import categories from "../../data/categories.json";

import { Colors } from "./Colors";

export interface Category {
  name: string;
  shortName: string;
  slug: string;
  ordered: boolean;
  starredCourses: string[];
  color: Colors;
}

export function useCategories(): Category[] {
  return categories as Category[];
}
