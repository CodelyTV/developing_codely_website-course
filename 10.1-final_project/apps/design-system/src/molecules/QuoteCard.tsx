import Image from "next/image";

import { classNames } from "../shared/classNames";

import { Avatar } from "../atoms/Avatar";
import { Sticker } from "../atoms/Sticker";

import styles from "./QuoteCard.module.scss";

export interface Quote {
  quote: string;
  author: {
    name: string;
    avatar: string;
    position: string;
    company?: {
      name: string;
      logo: string;
    };
  };
}

export interface QuoteCardProps extends Quote {
  variation?: 1 | 2 | 3;
}

export const QuoteCard = ({ variation = 1, author, quote }: QuoteCardProps) => {
  return (
    <figure className={classNames(styles.quotecard, styles[`quotecard--${variation}`])}>
      <blockquote className={styles.quotecard__quote}>
        <span className={styles.quotecard__sticker}>
          <Sticker sticker="random" width={96} height={96} />
        </span>
        <span dangerouslySetInnerHTML={{ __html: quote }}></span>
      </blockquote>
      <figcaption className={styles.quotecard__caption}>
        <Avatar src={author.avatar} alt="" />
        <div>
          <strong className={styles.quotecard__name}>{author.name}</strong>
          {author.position}
        </div>
        {author.company && (
          <Image src={author.company.logo} alt={author.company.name} className={styles.quotecard__logo} />
        )}
      </figcaption>
    </figure>
  );
};
