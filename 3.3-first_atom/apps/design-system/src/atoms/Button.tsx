import NextLink from "next/link";
import React from "react";

import { classNames } from "../shared/classNames";

import styles from "./Button.module.scss";

type HtmlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export interface ButtonProps {
  mode?: "primary" | "secondary" | "tertiary" | "inverted";
  size?: "large" | "small";
  children: string;
}

interface Overload {
  (props: HtmlButtonProps & ButtonProps): JSX.Element;
  (props: AnchorProps & ButtonProps): JSX.Element;
}

const hasHref = (props: HtmlButtonProps | AnchorProps): props is AnchorProps => "href" in props;

export const Button: Overload = ({ mode = "primary", size = "large", ...props }) => {
  const componentProps = {
    className: classNames(styles["btn"], styles[`btn--${mode}`], styles[`btn--${size}`]),
    ...props,
  };

  if (hasHref(componentProps)) {
    return (
      <NextLink href={componentProps.href}>
        <a {...componentProps} />
      </NextLink>
    );
  }

  return <button {...componentProps} />;
};
