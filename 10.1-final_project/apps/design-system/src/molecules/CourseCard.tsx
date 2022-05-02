import Image from "next/image";

import { classNames } from "../shared/classNames";

import { Button } from "../atoms/Button";
import { Colors } from "../tokens/colors";

import { Avatars } from "./Avatars";

import styles from "./CourseCard.module.scss";

export interface CourseCardProps {
  course: {
    emoji: string;
    title: string;
    summary: string;
    authors: {
      name: string;
      image: string;
    }[];
    isNew: boolean;
    sticker: string;
    url: string;
    color: Colors;
  };
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <article className={styles.course}>
      <figure className={classNames(styles.cover, styles[`cover--${course.color}`])}>
        {course.isNew && <span className={styles.cover__new}>¡Nuevo!</span>}

        <div className={styles.cover__brand}>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 63" width="38" height="63">
            <path
              d="M12.577 25.138H0v12.57h12.577v-12.57ZM25.154 12.57H12.577v12.568h12.577V12.57ZM25.154 37.705H12.577v12.57h12.577v-12.57ZM37.731 0H25.154v12.57h12.577V0ZM37.731 50.275H25.154v12.569h12.577v-12.57Z"
              fill="currentColor"
            />
          </svg>
          <figcaption className={styles.cover__title}>{course.title}</figcaption>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 63" width="38" height="63">
            <path
              d="M25.886 37.705h12.577V25.136H25.886v12.57ZM13.309 50.277h12.577v-12.57H13.309v12.57ZM13.309 25.136h12.577V12.567H13.309v12.57ZM13.308 0H.731v12.57h12.577V0ZM13.308 50.275H.731v12.569h12.577v-12.57Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className={styles.cover__sticker}>
          <Image src={course.sticker} alt="" width={150} height={150} />
        </div>
      </figure>
      <div className={styles.course__content}>
        <header className={styles.course__header}>
          <h3 className={styles.course__title}>
            {course.emoji} {course.title}
          </h3>
          <div className={styles.authors}>
            <Avatars avatars={course.authors.map((author) => ({ src: author.image, alt: author.name }))} />
          </div>
        </header>
        <p className={styles.course__description}>{course.summary}</p>
        <footer className={styles.course__footer}>
          <Button mode="tertiary" size="small" href={course.url}>
            Ver curso
          </Button>
        </footer>
      </div>
    </article>
  );
};
