import React from "react";

import { Avatar } from "../atoms/Avatar";

import styles from "./Avatars.module.scss";

export interface AvatarsProps {
  avatars: {
    src: string;
    alt?: string;
  }[];
}

export const Avatars = ({ avatars }: AvatarsProps) => {
  return (
    <span className={styles.avatars}>
      {avatars.map((avatar) => (
        <Avatar key={avatar.src} src={avatar.src} alt={avatar.alt || ""} size="medium" />
      ))}
    </span>
  );
};
