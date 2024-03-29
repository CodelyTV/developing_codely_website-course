import { MouseEvent, useEffect, useState } from "react";

import { Heading } from "@codely/design-system/src/atoms/Heading";
import { Link } from "@codely/design-system/src/atoms/Link";
import { Pill } from "@codely/design-system/src/atoms/Pill";
import { Carousel } from "@codely/design-system/src/molecules/Carousel";
import { CourseCard } from "@codely/design-system/src/molecules/CourseCard";
import { Container } from "@codely/design-system/src/objects/Container";

import { useReduceMotion } from "../shared/useReduceMotion";

import { Category } from "./useCategories";
import { Course } from "./useCourses";

import styles from "./Courses.module.scss";

export function Courses({ courses, categories }: { courses: Course[]; categories: Category[] }) {
  const [activeCategory, setActiveCategory] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const prefersReduceMotion = useReduceMotion();

  useEffect(() => {
    setFilteredCourses(
      activeCategory ? courses.filter((course) => course.categories.includes(activeCategory)) : courses
    );
  }, [activeCategory]);

  function addTranslateClass(ev: MouseEvent<HTMLDivElement>) {
    if (!prefersReduceMotion) {
      removeTranslateClass();
      ev.currentTarget.parentElement?.classList.add(styles["slide-hover"]);
    }
  }

  function removeTranslateClass() {
    if (!prefersReduceMotion) {
      document.querySelectorAll(`.${styles["slide-hover"]}`).forEach((el) => {
        el.classList.remove(styles["slide-hover"]);
      });
    }
  }

  return (
    <section className={styles.courses} aria-labelledby="courses-title">
      <Container>
        <Heading id="courses-title" level="h2">
          Cursos disponibles
        </Heading>
      </Container>
      <section className={styles.courses__categories}>
        <Pill isActive={!activeCategory} onClick={() => setActiveCategory("")}>
          Todos
        </Pill>
        {categories.map((category) => (
          <Pill
            key={category.slug}
            onClick={() => setActiveCategory(category.slug)}
            isActive={activeCategory === category.slug}
          >
            {category.shortName}
          </Pill>
        ))}
      </section>
      <Container>
        <section onMouseLeave={removeTranslateClass} className={styles.courses__content}>
          <Carousel isVirtualized itemHeight={544} itemWidth={296}>
            {filteredCourses.map((course, i) => (
              <div key={i} onMouseEnter={addTranslateClass} className={styles.courses__card}>
                <CourseCard course={course} />
              </div>
            ))}
          </Carousel>
        </section>

        <Link mode="secondary" href="https://pro.codely.tv/library/">
          Ver catálogo completo
        </Link>
      </Container>
    </section>
  );
}
