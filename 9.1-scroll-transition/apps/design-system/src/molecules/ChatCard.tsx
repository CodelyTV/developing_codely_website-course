import styles from "./ChatCard.module.scss";

export interface ChatCardProps {
  title: string;
  description: string;
}

export const ChatCard = ({ title, description }: ChatCardProps) => {
  return (
    <section className={styles.card}>
      <h3 className={styles.card__title}>{title}</h3>
      <p>{description}</p>
    </section>
  );
};
