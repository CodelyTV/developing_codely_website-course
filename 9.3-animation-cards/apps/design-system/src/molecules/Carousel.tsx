import React, { useEffect, useRef, useState } from "react";
import { FixedSizeList as List } from "react-window";

import { Icon } from "../atoms/Icon";
import { classNames } from "../shared/classNames";

import styles from "./Carousel.module.scss";

export interface BaseCarouselProps {
  children: React.ReactNode;
}

export interface VirtualizedCarouselProps extends BaseCarouselProps {
  isVirtualized: true;
  itemWidth: number;
  itemHeight: number;
}

export interface StandardCarouselProps extends BaseCarouselProps {
  isVirtualized?: false;
}

export type CarouselProps = StandardCarouselProps | VirtualizedCarouselProps;

function isInViewport(element: HTMLElement) {
  const bounding = element.getBoundingClientRect();

  return bounding.left >= 0 && bounding.right <= window.innerWidth;
}

const isVirtualizedlist = (
  isVirtualized: boolean,
  _props: Omit<CarouselProps, "isVirtualized">
): _props is Omit<VirtualizedCarouselProps, "isVirtualized"> => {
  return isVirtualized;
};

export function Carousel(props: StandardCarouselProps): JSX.Element;
export function Carousel(props: VirtualizedCarouselProps): JSX.Element;
export function Carousel({ isVirtualized = false, ...props }: CarouselProps) {
  const carousel = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const list = useRef<any>(null);
  const slides = React.Children.toArray(props.children);
  const [offset, setOffset] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  let timeout: number;

  function getCarouselOrThrow() {
    if (!carousel.current) {
      throw new Error("carousel not found");
    }

    return carousel.current;
  }

  function getSliderOrThrow() {
    if (isVirtualized) {
      if (!list.current) {
        throw new Error("Virtual list not found");
      }

      return list.current._outerRef;
    }
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

    if (isVirtualized) {
      setCarouselWidth(window.innerWidth);
    }

    timeout = window.setTimeout(() => {
      if (!slider.current) {
        return;
      }
      const offset = window.getComputedStyle(slider.current).getPropertyValue("padding-left") || "0";
      setOffset(parseInt(offset));
    }, 200);
  }

  function scrollTo(x: number) {
    if (isVirtualized) {
      const list = getSliderOrThrow();

      list.scrollTo(x, 0);

      return;
    }
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
      {isVirtualizedlist(isVirtualized, props) ? (
        <List
          ref={list}
          itemCount={slides.length}
          itemSize={props.itemWidth}
          layout="horizontal"
          width={carouselWidth}
          height={props.itemHeight}
          className={classNames(styles.carousel__slider, styles["carousel__slider--virtualized"])}
        >
          {({ index, style }) => (
            <div key={index} className={styles["carousel__slide"]} style={style}>
              {slides[index]}
            </div>
          )}
        </List>
      ) : (
        <div ref={slider} className={styles["carousel__slider"]}>
          {slides.map((child, index) => (
            <div key={index} className={styles["carousel__slide"]}>
              {child}
            </div>
          ))}
        </div>
      )}

      <div className={styles["carousel__nav"]}>
        <button className={styles["carousel__button"]} onClick={previousSlide} aria-label="Anterior">
          <Icon icon="arrowLeft" size="large" />
        </button>
        <button className={styles["carousel__button"]} onClick={nextSlide} aria-label="Siguiente">
          <Icon icon="arrowRight" size="large" />
        </button>
      </div>
    </div>
  );
}
