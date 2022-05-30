import Image from "next/image";

import { classNames } from "../shared/classNames";

import { Icon } from "../atoms/Icon";
import { IconButton } from "../atoms/IconButton";

import styles from "./ChangelogCard.module.scss";

export interface ChangelogCardProps {
  item: {
    title: string;
    url: string;
    image: string;
    subtitle?: string;
    platform: "codely" | "youtube" | "twitch";
    mode: "dark" | "light";
  };
}

export const ChangelogCard = ({ item }: ChangelogCardProps) => {
  const lead = {
    codely: "Nuevo contenido",
    twitch: "Pasó en Twitch",
    youtube: "Pasó en YouTube",
  };

  return (
    <article className={classNames(styles.card, styles[`card--${item.mode}`], styles[`card--${item.platform}`])}>
      <div className={styles.card__image}>
        <Image src={item.image} alt="" layout="fill"></Image>
      </div>
      <small className={styles.card__platform}>
        <Icon icon={item.platform} size="medium" /> {lead[item.platform]}
      </small>
      <IconButton size="medium" icon="play" label="Play" mode={item.mode}></IconButton>
      <h3 className={styles.card__title}>{item.title}</h3>
      {item.subtitle && <h4 className={styles.card__subtitle}>{item.subtitle}</h4>}
    </article>
  );
};
