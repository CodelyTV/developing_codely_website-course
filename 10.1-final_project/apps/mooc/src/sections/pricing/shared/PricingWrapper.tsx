import { Container } from "@codely/design-system/src/objects/Container";

import styles from "./PricingWrapper.module.scss";

export function PricingWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section id="pricing" aria-label="Pricing" className={styles.pricing}>
      <Container>
        <div className={styles.pricing__content}>{children}</div>
      </Container>
    </section>
  );
}
