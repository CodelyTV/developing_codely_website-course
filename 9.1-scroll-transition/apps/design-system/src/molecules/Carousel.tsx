import React, { useEffect, useRef, useState } from "react";

import { Icon } from "../atoms/Icon";

import styles from "./Carousel.module.scss";

export interface CarouselProps {
  children: React.ReactNode;
}

function isInViewport(element: HTMLElement) {
  const bounding = element.getBoundingClientRect();

  return bounding.left >= 0 && bounding.right <= window.innerWidth;
}

export function Carousel({ children }: CarouselProps) {
  const carousel = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const slides = React.Children.toArray(children);
  const [offset, setOffset] = useState(0);
  let timeout: number;

  function getCarouselOrThrow() {
    if (!carousel.current) {
      throw new Error("carousel not found");
    }

    return carousel.current;
  }

  function getSliderOrThrow() {
    if (!slider.current) {
      throw new Error("Slider not found");
    }

    return slider.current;
  }

  function getSlides() {
    const carousel = getCarouselOrThrow();

    const slides = carousel.querySelectorAll<HTMLElement>(`.${styles["carousel__slide"]}`) || [];
    let firstVisibleSlide, firstNotVisibleSlide;

    for (const slide of Array.from(slides)) {
      if (!firstVisibleSlide && isInViewport(slide)) {
        firstVisibleSlide = slide;
      }
      if (firstVisibleSlide && !isInViewport(slide)) {
        firstNotVisibleSlide = slide;

        break;
      }
    }

    return {
      firstVisibleSlide,
      firstNotVisibleSlide,
    };
  }

  function setupCarousel() {
    clearTimeout(timeout);

    timeout = window.setTimeout(() => {
      if (!slider.current) {
        return;
      }
      const offset = window.getComputedStyle(slider.current).getPropertyValue("padding-left") || "0";
      setOffset(parseInt(offset));
    }, 200);
  }

  function scrollTo(x: number) {
    const slider = getSliderOrThrow();
    slider.scrollTo(x, 0);
  }

  function nextSlide() {
    const { firstNotVisibleSlide } = getSlides();
    const position = firstNotVisibleSlide ? firstNotVisibleSlide.offsetLeft - offset : 0;

    scrollTo(position);
  }

  function previousSlide() {
    const slider = getSliderOrThrow();

    if (slider.scrollLeft < offset) {
      scrollTo(slider.scrollWidth);

      return;
    }

    const { firstVisibleSlide, firstNotVisibleSlide } = getSlides();
    if (!firstVisibleSlide) {
      return;
    }

    if (!firstNotVisibleSlide) {
      const previousSlide = firstVisibleSlide.previousElementSibling as HTMLElement | undefined;

      scrollTo((previousSlide?.offsetLeft || 0) - offset);

      return;
    }

    const position = slider.scrollLeft - (firstNotVisibleSlide.offsetLeft - firstVisibleSlide.offsetLeft);

    slider.scrollTo(position, 0);
  }

  useEffect(() => {
    setupCarousel();

    window.addEventListener("resize", setupCarousel);

    return () => {
      window.removeEventListener("resize", setupCarousel);
    };
  }, []);

  return (
    <div ref={carousel} className={styles.carousel}>
      <div ref={slider} className={styles.carousel__slider}>
        {slides.map((child, index) => (
          <div key={index} className={styles.carousel__slide}>
            {child}
          </div>
        ))}
      </div>

      <div className={styles.carousel__nav}>
        <button className={styles.carousel__button} onClick={previousSlide} aria-label="Anterior">
          <Icon icon="arrowLeft" size="large" />
        </button>
        <button className={styles.carousel__button} onClick={nextSlide} aria-label="Siguiente">
          <Icon icon="arrowRight" size="large" />
        </button>
      </div>
    </div>
  );
}
