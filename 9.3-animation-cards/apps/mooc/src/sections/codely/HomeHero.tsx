import { useEffect, useRef, useState } from "react";

import { SrOnly } from "@codely/design-system/src/objects/SrOnly";

import { useIsServerSide } from "../shared/useIsServerSide";
import { useReduceMotion } from "../shared/useReduceMotion";

import { Hero } from "./Hero";

export function HomeHero() {
  const stories = [
    {
      videoSrc: "",
      posterSrc: "/story.png",
    },
  ];
  const isServerSide = useIsServerSide();
  const prefersReduceMotion = useReduceMotion();
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const intervalRef = useRef<number>();
  const keywords = ["mantenible", "escalable", "testable"];
  const title = `Sube de nivel.\nHaz código\nmás\u00a0${
    prefersReduceMotion ? keywords[keywordIndex] : keywords[keywordIndex].substring(0, letterIndex)
  }`;
  const fullTitle = "Sube de nivel\nHaz código\nmás mantenible, escalable y testable.";

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setLetterIndex((prev) => prev + 1);
    }, 100);

    return () => window.clearInterval(intervalRef.current);
  }, [keywordIndex]);

  useEffect(() => {
    if (!prefersReduceMotion && letterIndex > keywords[keywordIndex].length) {
      clearInterval(intervalRef.current);
      setTimeout(() => {
        setKeywordIndex((prev) => {
          if (prev + 1 === keywords.length) {
            return 0;
          }

          return prev + 1;
        });
        setLetterIndex(0);
      }, 1000);
    }
  }, [letterIndex, prefersReduceMotion]);

  useEffect(() => {
    if (prefersReduceMotion) {
      const interval = setInterval(() => {
        setKeywordIndex((prev) => {
          if (prev + 1 === keywords.length) {
            return 0;
          }

          return prev + 1;
        });
      }, 2000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [prefersReduceMotion]);

  return (
    <Hero
      titleId="home-title"
      ctaText="Conoce nuestros cursos"
      ctaUrl="https://pro.codely.tv/library/"
      claim="✌️ Arquitectura de software, frontend, devops…"
      stories={stories}
    >
      {isServerSide() ? (
        <>
          <span aria-hidden="true">Sube de nivel. Haz código más {keywords[0]}</span>
          <SrOnly>
            , {keywords[1]} y {keywords[2]}
          </SrOnly>
        </>
      ) : (
        <>
          <span aria-hidden="true">{title}</span>
          <SrOnly>{fullTitle}</SrOnly>
        </>
      )}
    </Hero>
  );
}
