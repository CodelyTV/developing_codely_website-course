import { ChatCard } from "@codely/design-system/src/molecules/ChatCard";
import { Container } from "@codely/design-system/src/objects/Container";

import styles from "./Value.module.scss";

export function Value({ cards }: { cards: { title: string; description: string }[] }) {
  return (
    <Container tag="section" ariaLabel="Valor">
      <div className={styles.value}>
        <div className={styles.value__cards}>
          {cards.map((card) => (
            <ChatCard key={card.title} title={card.title} description={card.description} />
          ))}
        </div>
        <div className={styles.value__story}>
          <img src="/story.png" alt="" width={363} height={642} />
        </div>
      </div>
    </Container>
  );
}
