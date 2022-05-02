import React, { useState } from "react";

import styles from "./Toggle.module.scss";

export interface ToggleProps {
  id: string;
  label: string;
  initialState?: boolean;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Toggle = ({ id, label, initialState = false, onChange }: ToggleProps) => {
  const [checked, setChecked] = useState(initialState);

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setChecked(ev.target.checked);
    onChange(ev);
  }

  return (
    <div>
      <input className={styles.input} onChange={handleChange} id={id} name={id} type="checkbox" checked={checked} />
      <label htmlFor={id} className={styles.label}>
        <span className={styles.label__switch} />
        {label}
      </label>
    </div>
  );
};
