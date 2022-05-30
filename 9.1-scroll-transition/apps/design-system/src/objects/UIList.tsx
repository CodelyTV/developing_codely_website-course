import React from "react";

import { classNames } from "../shared/classNames";

import styles from "./UIList.module.scss";

export interface UIListProps {
  children: React.ReactNode;
  mode?: "vertical" | "horizontal";
}

export const UIList = ({ mode = "horizontal", children }: UIListProps) => {
  return (
    <ul className={classNames(styles["ui-list"], styles[`ui-list--${mode}`])}>
      {React.Children.map(children, (child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  );
};
