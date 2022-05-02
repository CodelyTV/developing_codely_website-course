import React from "react";

export interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};
