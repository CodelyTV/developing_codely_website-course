import styles from "./Layout.module.scss";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <main className={styles.layout}>{children}</main>;
};
