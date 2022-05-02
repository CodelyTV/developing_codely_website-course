import courses from "../../data/courses.json";
import authorsData from "../../data/authors.json";

import { Colors } from "./Colors";

interface CourseData {
  title: string;
  emoji: string;
  summary: string;
  authors: string[];
  releaseDate: {
    start: string;
    end: string;
  };
  tags: any[];
  categories: string[];
  sticker: string;
  slug: string;
  color: Colors;
  url: string;
}

export interface Course {
  emoji: string;
  title: string;
  summary: string;
  authors: Author[];
  categories: string[];
  isNew: boolean;
  sticker: string;
  url: string;
  slug: string;
  color: Colors;
}

export interface Author {
  name: string;
  image: string;
}

export function useCourses(): Course[] {
  const newTimeFrame = 1000 * 60 * 60 * 24 * 7 * 8; // 8 weeks

  return (courses as CourseData[])
    .sort((a, b) => +new Date(b.releaseDate.end) - +new Date(a.releaseDate.end))
    .map((course) => {
      const isNew = +new Date() - +new Date(course.releaseDate.end) < newTimeFrame;

      const authors: Author[] = course.authors.map((author) => {
        const authorData = authorsData.find((authorData) => authorData.slug === author);
        if (!authorData) {
          throw new Error(`Author ${author} not found`);
        }

        return {
          name: authorData.name,
          image: authorData.image,
        };
      });

      return {
        emoji: course.emoji,
        title: course.title,
        summary: course.summary,
        authors,
        categories: course.categories,
        isNew,
        sticker: course.sticker,
        url: course.url,
        slug: course.slug,
        color: course.color,
      };
    });
}
