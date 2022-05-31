import { useEffect, useRef, useState } from "react";

import { Heading } from "@codely/design-system/src/atoms/Heading";
import { Link } from "@codely/design-system/src/atoms/Link";
import { ChangelogCard } from "@codely/design-system/src/molecules/ChangelogCard";
import { Container } from "@codely/design-system/src/objects/Container";

import { useChangelog } from "./useChangelog";

import styles from "./Changelog.module.scss";

export function Changelog() {
  const changelog = useChangelog();
  const container = useRef<HTMLDivElement>(null);

  const [parallaxVariables, setParallaxVariables] = useState({
    top: 0,
    height: 0,
  });

  function parallax() {
    if (!container.current) {
      return;
    }

    const { top, height } = container.current?.getBoundingClientRect();

    setParallaxVariables({ top, height });
  }

  useEffect(() => {
    document.addEventListener("scroll", parallax);

    return () => {
      document.removeEventListener("scroll", parallax);
    };
  }, []);

  return (
    <Container tag="section" ariaLabelledby="changelog-title">
      <div
        ref={container}
        className={styles.changelog}
        style={{ "--top": parallaxVariables.top, "--height": parallaxVariables.height } as React.CSSProperties}
      >
        <div className={styles.changelog__content}>
          <div className={styles.changelog__title}>
            <Heading id="changelog-title" size="medium" level="h2">
              Contenido nuevo cada semana
            </Heading>
          </div>
          {changelog.map((item) => (
            <ChangelogCard key={item.title} item={item} />
          ))}
        </div>
      </div>
      <div className={styles.link}>
        <Link rel="nofollow" href="https://headwayapp.co/codelytv-updates">
          Ver todo
        </Link>
      </div>
    </Container>
  );
}
