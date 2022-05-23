import React from "react";

import { classNames } from "../shared/classNames";

import styles from "./Icon.module.scss";

export interface IconProps {
  size?: "small" | "medium" | "large" | "xl";
  children: React.ReactNode;
}

export const Icon = ({ size = "medium", children, ...props }: IconProps) => {
  return (
    <span className={classNames(styles.icon, styles[`icon--${size}`])} {...props}>
      {children}
    </span>
  );
};
