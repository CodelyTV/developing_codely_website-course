import NextLink from "next/link";
import React from "react";

import { classNames } from "../shared/classNames";

import styles from "./Link.module.scss";

export interface LinkProps {
  mode?: "primary" | "secondary" | "tertiary" | "inverted";
  href: string;
  children: string;
  rel?: string;
}

export const Link = ({ mode = "primary", children, href, ...props }: LinkProps) => {
  return (
    <NextLink href={href}>
      <a className={classNames(styles["link"], styles[`link--${mode}`])} {...props}>
        {children}
      </a>
    </NextLink>
  );
};
