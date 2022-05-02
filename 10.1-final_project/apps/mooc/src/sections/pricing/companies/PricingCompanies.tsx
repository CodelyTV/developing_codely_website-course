import React from "react";

import { Button } from "@codely/design-system/src/atoms/Button";
import { Link } from "@codely/design-system/src/atoms/Link";
import { Slider } from "@codely/design-system/src/atoms/Slider";

import { classNames } from "../../shared/classNames";
import { Benefits } from "../shared/Benefits";
import { Price } from "../shared/Price";
import { PricingWrapper } from "../shared/PricingWrapper";

import { useCompaniesPricing } from "./useCompaniesPricing";

import styles from "../shared/Pricing.module.scss";

export function PricingCompanies() {
  const { benefits, setEmployeeAmount, price, employeeAmount } = useCompaniesPricing();

  function changePrice(ev: React.ChangeEvent<HTMLInputElement>) {
    setEmployeeAmount(parseInt(ev.target.value, 10));
  }

  return (
    <PricingWrapper>
      <>
        <section aria-labelledby="companies-pricing-title" className={classNames(styles.card, styles["card--wide"])}>
          <header className={styles.card__header}>
            <h2 id="companies-pricing-title" className={styles.card__title}>
              Paga según el tamaño de tu equipo
            </h2>
          </header>
          <div className={styles.card__content}>
            <Price price={price}>
              IVA no incluido
              <Slider
                id="paymentType"
                label="Número de empleados"
                initialState={employeeAmount}
                min={1}
                onChange={changePrice}
              />
            </Price>
            <Benefits list={benefits} />
          </div>
          <div className={styles.card__cta}>
            <Button mode="primary">Suscríbete</Button>
          </div>
        </section>
        <div className={styles.centered}>
          <Link href="#" mode="inverted">
            Ver FAQs
          </Link>
        </div>
      </>
    </PricingWrapper>
  );
}
