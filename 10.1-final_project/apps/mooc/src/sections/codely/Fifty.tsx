import React, { useEffect, useRef, useState } from "react";

import { Button } from "@codely/design-system/src/atoms/Button";
import { Heading } from "@codely/design-system/src/atoms/Heading";
import { Sticker } from "@codely/design-system/src/atoms/Sticker";
import { Container } from "@codely/design-system/src/objects/Container";

import FlowDesktop from "../../assets/graphics/flow-desktop.svg";
import FlowMobile from "../../assets/graphics/flow-mobile.svg";
import FlowTablet from "../../assets/graphics/flow-tablet.svg";
import { classNames } from "../shared/classNames";
import { useReduceMotion } from "../shared/useReduceMotion";

import styles from "./Fifty.module.scss";

export function Fifty() {
  const prefersReduceMotion = useReduceMotion();

  const [length, setLength] = useState({
    first: {
      mobile: 0,
      tablet: 0,
      desktop: 0,
    },
    second: {
      mobile: 0,
      tablet: 0,
      desktop: 0,
    },
    third: {
      mobile: 0,
      tablet: 0,
      desktop: 0,
    },
  });
  const flow = useRef<HTMLDivElement>(null);

  function setPathsLength() {
    const path1Mobile = document.querySelector<SVGPathElement>("#flow-mobile path:nth-child(1)");
    const path1Tablet = document.querySelector<SVGPathElement>("#flow-tablet path:nth-child(1)");
    const path1Desktop = document.querySelector<SVGPathElement>("#flow-desktop path:nth-child(1)");
    const path2Mobile = document.querySelector<SVGPathElement>("#flow-mobile path:nth-child(2)");
    const path2Tablet = document.querySelector<SVGPathElement>("#flow-tablet path:nth-child(2)");
    const path2Desktop = document.querySelector<SVGPathElement>("#flow-desktop path:nth-child(2)");
    const path3Mobile = document.querySelector<SVGPathElement>("#flow-mobile path:nth-child(3)");
    const path3Tablet = document.querySelector<SVGPathElement>("#flow-tablet path:nth-child(3)");
    const path3Desktop = document.querySelector<SVGPathElement>("#flow-desktop path:nth-child(3)");

    setLength({
      first: {
        mobile: path1Mobile?.getTotalLength() || 0,
        tablet: path1Tablet?.getTotalLength() || 0,
        desktop: path1Desktop?.getTotalLength() || 0,
      },
      second: {
        mobile: path2Mobile?.getTotalLength() || 0,
        tablet: path2Tablet?.getTotalLength() || 0,
        desktop: path2Desktop?.getTotalLength() || 0,
      },
      third: {
        mobile: path3Mobile?.getTotalLength() || 0,
        tablet: path3Tablet?.getTotalLength() || 0,
        desktop: path3Desktop?.getTotalLength() || 0,
      },
    });
  }

  function createObserver() {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const flow = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            flow.className = classNames(styles.flow, styles["flow--animated"]);

            return;
          }
          flow.className = styles.flow;
        });
      },
      { threshold: 0.5 }
    );
  }

  useEffect(() => {
    if (!prefersReduceMotion) {
      setPathsLength();

      const observer = createObserver();
      if (!flow.current) {
        return;
      }
      observer.observe(flow.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [prefersReduceMotion]);

  return (
    <Container tag="section" ariaLabelledby="fifty-title">
      <div className={styles.fifty}>
        <header className={styles.fifty__header}>
          <Heading id="fifty-title" level="h2" size="small">
            Formación integrada en el flujo de trabajo
          </Heading>
        </header>
        <div ref={flow} className={styles.flow}>
          <FlowMobile
            id="flow-mobile"
            className={classNames(styles.flow__graph, styles["flow__graph--mobile"])}
            style={
              {
                "--stroke1-length": length.first.mobile,
                "--stroke2-length": length.third.mobile,
                "--stroke3-length": length.third.mobile,
              } as React.CSSProperties
            }
          />
          <FlowTablet
            id="flow-tablet"
            className={classNames(styles.flow__graph, styles["flow__graph--tablet"])}
            style={
              {
                "--stroke1-length": length.first.tablet,
                "--stroke2-length": length.third.tablet,
                "--stroke3-length": length.third.tablet,
              } as React.CSSProperties
            }
          />
          <FlowDesktop
            id="flow-desktop"
            className={classNames(styles.flow__graph, styles["flow__graph--desktop"])}
            style={
              {
                "--stroke1-length": length.first.desktop,
                "--stroke2-length": length.third.desktop,
                "--stroke3-length": length.third.desktop,
              } as React.CSSProperties
            }
          />
          <ol className={styles.flow__steps}>
            <li>1_ Define qué aprender</li>
            <li>2_ Identifica dónde aplicarlo</li>
            <li>3_ Impleméntalo en tu código</li>
          </ol>
          {!prefersReduceMotion && (
            <div className={styles.flow__sticker}>
              <Sticker sticker="ufo" width={126} height={126} />
            </div>
          )}
        </div>
        <Button href="#" mode="secondary">
          Descubre El Método FIFTY™
        </Button>
        <p className={styles.fifty__tip}>✌️ Asegura el impacto de la formación en tu día a día</p>
      </div>
    </Container>
  );
}
