import React from "react";

import { Button } from "@codely/design-system/src/atoms/Button";
import { Lead } from "@codely/design-system/src/atoms/Lead";
import { Toggle } from "@codely/design-system/src/atoms/Toggle";

import { classNames } from "../../shared/classNames";
import { Benefits } from "../shared/Benefits";
import { Price } from "../shared/Price";
import { PricingWrapper } from "../shared/PricingWrapper";

import { useIndividualsPricing } from "./useIndividualsPricing";

import styles from "../shared/Pricing.module.scss";

export function PricingHome() {
  return (
    <PricingWrapper>
      <PricingIndividualsInfo />
      <PricingCompaniesInfo />
    </PricingWrapper>
  );
}

function PricingIndividualsInfo() {
  const { benefits, setPricePeriod, price } = useIndividualsPricing();

  function changePrice(ev: React.ChangeEvent<HTMLInputElement>) {
    setPricePeriod(ev.target.checked ? "yearly" : "monthly");
  }

  return (
    <section aria-labelledby="individuals-pricing-title" className={classNames(styles.card, styles["card--narrow"])}>
      <header className={styles.card__header}>
        <h2 id="individuals-pricing-title" className={styles.card__title}>
          Individuos
        </h2>
        <Price price={price}>
          <div className={styles.card__control}>
            <Toggle id="paymentType" label="Pago anual" initialState={true} onChange={changePrice} />
          </div>
        </Price>
      </header>
      <div className={styles.card__content}>
        <Benefits list={benefits} />
      </div>
      <div className={styles.card__cta}>
        <Lead bold>SIN PERMANENCIA MÍNIMA</Lead>
        <Button mode="primary" href="https://pro.codely.tv/subscribe/">
          Suscríbete
        </Button>
      </div>
    </section>
  );
}

function PricingCompaniesInfo() {
  const benefits = [
    { label: "Descuento de hasta un 40%", emoji: "💸" },
    { label: "Gestión centralizada de cuentas", emoji: "✨" },
    { label: "Profesionales con amplia experiencia", emoji: "🧑‍🏫" },
    { label: "Facturas a nombre de empresa", emoji: "💼" },
    { label: "Reportes y analítica", emoji: "📈" },
  ];

  return (
    <section
      aria-labelledby="companies-pricing-title"
      className={classNames(styles.card, styles["card--secondary"], styles["card--narrow"])}
    >
      <header className={styles.card__header}>
        <h2 id="companies-pricing-title" className={styles.card__title}>
          Empresas
        </h2>
        <p className={styles.card__description}>¿Crees que puede interesar a más miembros del equipo?</p>
      </header>
      <div className={styles.card__content}>
        <Benefits list={benefits} />
      </div>
      <div className={styles.card__cta}>
        <Button mode="inverted" href="/empresas#pricing">
          Más información
        </Button>
      </div>
    </section>
  );
}
