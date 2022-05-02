import { ChatCard } from "@codely/design-system/src/molecules/ChatCard";
import { StoryPlayer } from "@codely/design-system/src/molecules/StoryPlayer";
import { Container } from "@codely/design-system/src/objects/Container";

import { Story } from "./useStories";

import styles from "./Value.module.scss";

export function Value({ cards, stories }: { cards: { title: string; description: string }[]; stories: Story[] }) {
  return (
    <Container tag="section" ariaLabel="Valor">
      <div className={styles.value}>
        <div className={styles.value__cards}>
          {cards.map((card) => (
            <ChatCard key={card.title} title={card.title} description={card.description} />
          ))}
        </div>
        <div className={styles.value__story}>
          <StoryPlayer stories={stories} />
        </div>
      </div>
    </Container>
  );
}
