import React from "react";

import { classNames } from "../shared/classNames";

import * as icons from "../icons/icons";

import styles from "./Icon.module.scss";

export type Icons = keyof typeof icons;
export interface IconProps {
  icon: Icons;
  size?: "small" | "medium" | "large" | "xl";
}

export const Icon = ({ size = "medium", icon, ...props }: IconProps) => {
  return (
    <span className={classNames(styles["icon"], styles[`icon--${size}`])} {...props}>
      {icons[icon]()}
    </span>
  );
};
