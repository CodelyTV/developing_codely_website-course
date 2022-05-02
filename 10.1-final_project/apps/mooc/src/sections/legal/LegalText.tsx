import { Container } from "@codely/design-system/src/objects/Container";

import styles from "./LegalText.module.scss";

interface LegalTextProps {
  title: string;
  children: React.ReactNode;
}

export function LegalText({ title, children }: LegalTextProps) {
  return (
    <Container tag="section" ariaLabelledby="legal-title">
      <div className={styles.legal}>
        <h1 id="legal-title" className={styles.legal__title}>
          {title}
        </h1>

        {children}
      </div>
    </Container>
  );
}
