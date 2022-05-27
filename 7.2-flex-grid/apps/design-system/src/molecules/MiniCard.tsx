import { Sticker, Stickers } from "../atoms/Sticker";
import { classNames } from "../shared/classNames";

import styles from "./MiniCard.module.scss";

export interface MiniCardProps {
  variation?: 1 | 2 | 3;
  sticker: Stickers;
  title: string;
  description: string;
}

export const MiniCard = ({ variation = 1, sticker, title, description }: MiniCardProps) => {
  return (
    <section className={classNames(styles.minicard, styles[`minicard--${variation}`])}>
      <div className={styles.minicard__sticker}>
        <Sticker sticker={sticker} width={96} height={96} />
      </div>
      <div>
        <h3 className={styles.minicard__title}>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};
