import React, { useEffect, useRef, useState } from "react";

import { SrOnly } from "../objects/SrOnly";

import { Input } from "./Input";

import styles from "./Slider.module.scss";

export interface SliderProps {
  id: string;
  label: string;
  initialState?: number;
  min?: number;
  max?: number;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Slider = ({ id, label, onChange, initialState = 50, min = 0, max = 100 }: SliderProps) => {
  const [value, setValue] = useState(initialState);
  const inputEl = useRef<HTMLInputElement>(null);
  const [backgroundSize, setBackgroundSize] = useState(initialState);

  useEffect(() => {
    updateBackgroundSize(initialState);
  }, [inputEl]);

  useEffect(() => {
    updateBackgroundSize(value);
  }, [value, min, max]);

  function updateBackgroundSize(val: number) {
    if (inputEl.current) {
      const min = parseInt(inputEl.current.min) || 0;
      const max = parseInt(inputEl.current.max) || 100;
      setBackgroundSize(((val - min) * 100) / (max - min));
    }
  }

  function handleInputChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setValue(parseInt(ev.target.value));
    onChange(ev);
  }

  return (
    <div className={styles.slider}>
      <input
        ref={inputEl}
        min={min}
        max={max}
        value={value}
        className={styles.slider__range}
        onChange={handleInputChange}
        id={id}
        name={id}
        type="range"
        style={{ backgroundSize: `${backgroundSize}% 100%` }}
      />
      <SrOnly>
        <label className={styles.slider__label} htmlFor={id}>
          {label}
        </label>
      </SrOnly>
      <div className={styles.slider__input}>
        <Input
          value={value}
          size="small"
          type="number"
          id={`${id}-input`}
          label={label}
          onChange={handleInputChange}
          min={min}
          max={max}
          hideLabel
        />
      </div>
    </div>
  );
};
