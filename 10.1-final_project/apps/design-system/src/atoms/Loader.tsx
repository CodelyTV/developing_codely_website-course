import React from "react";

import { SrOnly } from "../objects/SrOnly";

import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <>
      <SrOnly>Cargando…</SrOnly>
      <svg className={styles.loader} viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </svg>
    </>
  );
};
