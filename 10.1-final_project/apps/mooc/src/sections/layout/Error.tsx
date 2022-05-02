import Image from "next/image";

import { Button } from "@codely/design-system/src/atoms/Button";
import { Container } from "@codely/design-system/src/objects/Container";

import styles from "./Error.module.scss";

export function Error() {
  return (
    <Container tag="section">
      <div className={styles.error}>
        <div className={styles.error__content}>
          <p>👀️ ¡Oh, no!</p>
          <h2 className={styles.error__title}>Ups, parece que estás delante de un error 404</h2>
          <p className={styles.error__subtitle}>
            La página que buscas ya no existe o ha cambiado de dirección. ¿Qué te parece si vuelves a la página
            principal y hacemos como que aquí no ha pasado nada?
          </p>
          <Button href="/" mode="secondary">
            Volver al inicio
          </Button>
        </div>
        <div className={styles.error__ufo}>
          <Image src="/img/global/ufo-abduction.png" alt="ufo abduction" width={612} height={730} />
        </div>
      </div>
    </Container>
  );
}
