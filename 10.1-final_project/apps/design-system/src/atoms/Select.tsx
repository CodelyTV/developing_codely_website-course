import React, { useEffect, useState } from "react";

import { classNames } from "../shared/classNames";

import { Label } from "./Label";

import styles from "./Select.module.scss";

export interface SelectProps {
  id: string;
  label: string;
  hideLabel?: boolean;
  value?: string | number;
  size?: "small" | "medium";
  children: React.ReactNode;
  onChange?: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
  id,
  size = "medium",
  label,
  value = "",
  hideLabel = false,
  onChange,
  children,
  ...props
}: SelectProps) => {
  const [internalvalue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  function handleChange(ev: React.ChangeEvent<HTMLSelectElement>) {
    setInternalValue(ev.target.value);
    onChange && onChange(ev);
  }

  return (
    <div>
      <Label isHidden={hideLabel} htmlFor={id}>
        {label}
      </Label>
      <div className={styles.select}>
        <select
          className={classNames(styles.select__control, styles[`select__control--${size}`])}
          onChange={handleChange}
          id={id}
          name={id}
          value={internalvalue}
          {...props}
        >
          {children}
        </select>
      </div>
    </div>
  );
};
