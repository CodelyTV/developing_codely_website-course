import NextLink from "next/link";
import React from "react";

import { classNames } from "../shared/classNames";

import styles from "./Button.module.scss";

export interface ButtonProps {
  mode?: "primary" | "secondary" | "tertiary" | "inverted";
  size?: "large" | "small";
  href?: string;
  children: string;
}

export const Button = ({ mode = "primary", size = "large", ...props }: ButtonProps) => {
  const componentProps = {
    className: classNames(styles["btn"], styles[`btn--${mode}`], styles[`btn--${size}`]),
    ...props,
  };

  if (props.href) {
    return (
      <NextLink href={props.href}>
        <a {...componentProps} />
      </NextLink>
    );
  }

  return <button {...componentProps} />;
};
