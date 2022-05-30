import { Button } from "@codely/design-system/src/atoms/Button";
import { Heading } from "@codely/design-system/src/atoms/Heading";
import { MiniCard } from "@codely/design-system/src/molecules/MiniCard";
import { Container } from "@codely/design-system/src/objects/Container";

import styles from "./KeyPoints.module.scss";

export function KeyPoints() {
  return (
    <Container tag="section" ariaLabelledby="keypoints-title">
      <div className={styles.keypoints}>
        <header className={styles.keypoints__header}>
          <Heading id="keypoints-title" level="h2">
            Aprende buenas prácticas aplicadas al Mundo Real™
          </Heading>
          <Button href="#pricing" mode="secondary" size="large">
            Suscríbete ahora
          </Button>
          <p className={styles.keypoints__lead}>🎯 Ejemplos prácticos y al grano más allá del Hello World</p>
        </header>

        <div className={styles.keypoints__cards}>
          <MiniCard
            variation={1}
            title="Arquitectura de software"
            description="SOLID, Arquitectura Hexagonal, DDD y microservicios de principio a fin."
            sticker="pineapple"
          />
          <MiniCard
            variation={2}
            title="Frontend a otro nivel"
            description="Haz tu JavaScript, CSS y HTML a prueba de tests. No más hacks."
            sticker="ufo"
          />
          <MiniCard
            variation={3}
            title="Complementa tu perfil"
            description="Fórmate como lo hacen en Atrápalo, PcComponentes, Promofarma, Wallapop…"
            sticker="android"
          />
        </div>
      </div>
    </Container>
  );
}
