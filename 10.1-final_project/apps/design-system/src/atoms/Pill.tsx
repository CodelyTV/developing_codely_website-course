import React from "react";

import { classNames } from "../shared/classNames";

import styles from "./Pill.module.scss";

export interface PillProps {
  isActive: boolean;
  children: string;
  onClick: () => void;
}

export const Pill = ({ isActive, children, ...props }: PillProps) => {
  return (
    <button className={classNames(styles.pill, { [styles["pill--active"]]: isActive })} {...props}>
      {children}
    </button>
  );
};
