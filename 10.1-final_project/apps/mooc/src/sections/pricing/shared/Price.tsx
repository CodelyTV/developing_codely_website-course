import { Icon } from "@codely/design-system/src/atoms/Icon";

import { PriceInfo } from "../companies/useCompaniesPricing";

import styles from "./Price.module.scss";

export function Price({ price, children }: { price: PriceInfo; children: React.ReactNode }) {
  return (
    <div>
      <div className={styles.price}>
        <strong className={styles.price__amount}>{price.amount}</strong>/ {price.period}
        {price.tooltip && (
          <span className={styles.tooltip}>
            <Icon icon="info" />
            <span className={styles.tooltip__label}>{price.tooltip}</span>
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
