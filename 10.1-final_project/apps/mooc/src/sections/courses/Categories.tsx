import Image from "next/image";
import { useState } from "react";

import { Heading } from "@codely/design-system/src/atoms/Heading";
import { Carousel } from "@codely/design-system/src/molecules/Carousel";
import { Container } from "@codely/design-system/src/objects/Container";

import { classNames } from "../shared/classNames";

import { CategoryWithCourse } from "./useCategoryWithCourse";

import styles from "./Categories.module.scss";

export function Categories({ categories }: { categories: CategoryWithCourse[] }) {
  return (
    <Container tag="section" ariaLabelledby="categories-title">
      <div className={styles.categories}>
        <CategoriesHeader isMobile />
        <Carousel>
          <CategoriesHeader />
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

function CategoriesHeader({ isMobile }: { isMobile?: boolean }) {
  return (
    <header className={classNames(styles.categories__header, { [styles["categories__header--mobile"]]: !!isMobile })}>
      <Heading id={isMobile ? "categories-title-mobile" : "categories-title"} level="h2">
        Plan de carrera para todo tu equipo
      </Heading>
      <p className={styles.categories__description}>
        Sigue el orden de cursos recomendado para aprender buenas prácticas en diseño y arquitectura de software,
        frontend, devops…
      </p>
    </header>
  );
}

function CategoryCard({ category }: { category: CategoryWithCourse }) {
  const stickers = category.starredCourses.map((course) => course.sticker);
  const [currentSticker, setCurrentSticker] = useState(stickers[0]);
  const List = category.ordered ? "ol" : "ul";

  return (
    <section
      aria-labelledby={`${category.slug}-title`}
      className={classNames(styles.category, styles[`category--${category.color}`])}
    >
      <header className={styles.category__header}>
        <h3 id={`${category.slug}-title`} className={styles.category__title}>
          {category.name}
        </h3>
        <figure className={styles.category__figure}>
          <svg className={styles.category__logo} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 63">
            <path
              d="M12.577 25.138H0v12.57h12.577v-12.57ZM25.154 12.57H12.577v12.568h12.577V12.57ZM25.154 37.705H12.577v12.57h12.577v-12.57ZM37.731 0H25.154v12.57h12.577V0ZM37.731 50.275H25.154v12.569h12.577v-12.57Z"
              fill="currentColor"
            />
          </svg>
          <svg className={styles.category__logo} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 63">
            <path
              d="M25.886 37.705h12.577V25.136H25.886v12.57ZM13.309 50.277h12.577v-12.57H13.309v12.57ZM13.309 25.136h12.577V12.567H13.309v12.57ZM13.308 0H.731v12.57h12.577V0ZM13.308 50.275H.731v12.569h12.577v-12.57Z"
              fill="currentColor"
            />
          </svg>
          <div className={styles.category__sticker}>
            <Image src={currentSticker} alt="" width={286} height={286} />
          </div>
        </figure>
      </header>
      <List className={styles.category__courses}>
        {category.starredCourses.map(
          (course) =>
            course && (
              <li key={course.title}>
                <a
                  href={course.url}
                  className={styles.category__course}
                  onMouseEnter={() => setCurrentSticker(course.sticker)}
                >
                  {course.emoji} {course.title}
                </a>
              </li>
            )
        )}
      </List>
    </section>
  );
}
