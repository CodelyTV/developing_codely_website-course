import React from "react";

import { classNames } from "../shared/classNames";

import styles from "./Heading.module.scss";

export interface HeadingProps {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "large";
  id?: string;
  children: React.ReactNode;
}

export const Heading = ({ children, level = "h1", size = "medium", id, ...props }: HeadingProps) => {
  const Tag = level;

  return (
    <Tag id={id} className={classNames(styles["heading"], styles[`heading--${size}`])} {...props}>
      {children}
    </Tag>
  );
};
