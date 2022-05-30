import React from "react";

import { Button } from "@codely/design-system/src/atoms/Button";
import { Heading } from "@codely/design-system/src/atoms/Heading";
import { Container } from "@codely/design-system/src/objects/Container";

import FlowDesktop from "../../assets/graphics/flow-desktop.svg";
import FlowMobile from "../../assets/graphics/flow-mobile.svg";
import FlowTablet from "../../assets/graphics/flow-tablet.svg";
import { classNames } from "../shared/classNames";

import styles from "./Fifty.module.scss";

export function Fifty() {
  return (
    <Container tag="section" ariaLabelledby="fifty-title">
      <div className={styles.fifty}>
        <header className={styles.fifty__header}>
          <Heading id="fifty-title" level="h2" size="small">
            Formación integrada en el flujo de trabajo
          </Heading>
        </header>
        <div className={styles.flow}>
          <FlowMobile id="flow-mobile" className={classNames(styles.flow__graph, styles["flow__graph--mobile"])} />
          <FlowTablet id="flow-tablet" className={classNames(styles.flow__graph, styles["flow__graph--tablet"])} />
          <FlowDesktop id="flow-desktop" className={classNames(styles.flow__graph, styles["flow__graph--desktop"])} />
          <ol className={styles.flow__steps}>
            <li>1_ Define qué aprender</li>
            <li>2_ Identifica dónde aplicarlo</li>
            <li>3_ Impleméntalo en tu código</li>
          </ol>
        </div>
        <Button href="#" mode="secondary">
          Descubre El Método FIFTY™
        </Button>
        <p className={styles.fifty__tip}>✌️ Asegura el impacto de la formación en tu día a día</p>
      </div>
    </Container>
  );
}
