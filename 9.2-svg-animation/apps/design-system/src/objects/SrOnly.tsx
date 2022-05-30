import styles from "./SrOnly.module.scss";

export interface SrOnlyProps {
  children: React.ReactNode;
}

export const SrOnly = ({ children }: SrOnlyProps) => {
  return <span className={styles.sronly}>{children}</span>;
};
