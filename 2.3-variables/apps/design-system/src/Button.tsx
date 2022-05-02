import React from "react";

import { classNames } from "./shared/classNames";

import styles from "./button.module.scss";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = "medium", label, ...props }: ButtonProps) => {
  const mode = primary ? "button--primary" : "button--secondary";

  return (
    <button type="button" className={classNames(styles.button, styles[`button--${size}`], mode)} {...props}>
      {label}
    </button>
  );
};
