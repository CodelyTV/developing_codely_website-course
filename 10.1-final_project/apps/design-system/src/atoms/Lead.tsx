import React from "react";

import { classNames } from "../shared/classNames";

import styles from "./Lead.module.scss";

export interface LeadProps {
  children: string;
  bold?: boolean;
}

export const Lead = ({ children, bold = false }: LeadProps) => {
  return <small className={classNames(styles.lead, { [styles["lead--bold"]]: bold })}>{children}</small>;
};
