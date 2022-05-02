import { UIList } from "@codely/design-system/src/objects/UIList";

import { classNames } from "../../shared/classNames";

import { Benefit } from "./Benefit";

import styles from "./Benefits.module.scss";

export function Benefits({ list }: { list: Benefit[] }) {
  return (
    <UIList mode="vertical">
      {list.map((benefit) => (
        <span
          className={classNames(styles.benefit, { [styles[`benefit--${benefit.status}`]]: !!benefit.status })}
          key={benefit.label}
        >
          <span className={styles.benefit__icon}>
            {benefit.status ? (benefit.status === "enabled" ? benefit.emoji : "❌") : benefit.emoji}
          </span>
          {benefit.label}
        </span>
      ))}
    </UIList>
  );
}
