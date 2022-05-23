import { ChatCard } from "@codely/design-system/src/molecules/ChatCard";
import layoutStyles from "@codely/design-system/src/objects/Container.module.scss";

import { classNames } from "../shared/classNames";

import styles from "./Value.module.scss";

export function Value({ cards }: { cards: { title: string; description: string }[] }) {
  return (
    <section className={classNames(styles.value, layoutStyles.container)}>
      <div className={styles.value__cards}>
        {cards.map((card) => (
          <ChatCard key={card.title} title={card.title} description={card.description} />
        ))}
      </div>
      <div className={styles.value__story}>
        <img src="/story.png" alt="" width={363} height={642} />
      </div>
    </section>
  );
}
