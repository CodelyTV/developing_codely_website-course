import React from "react";

import { SrOnly } from "../objects/SrOnly";

import styles from "./Label.module.scss";

export interface LabelProps {
  htmlFor: string;
  children: string;
  isHidden?: boolean;
}

export const Label = ({ children, isHidden = false, ...props }: LabelProps) => {
  const label = (
    <label className={styles.label} {...props}>
      {children}
    </label>
  );

  return isHidden ? <SrOnly>{label}</SrOnly> : label;
};
