import React from "react";

import { classNames } from "../shared/classNames";

import styles from "./Heading.module.scss";

export interface HeadingProps {
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export const Heading = ({ children, size = "medium", ...props }: HeadingProps) => {
  return (
    <h1 className={classNames(styles.heading, styles[`heading--${size}`])} {...props}>
      {children}
    </h1>
  );
};
