import styles from "./Container.module.scss";

export interface ContainerProps {
  children: React.ReactNode;
  tag?: "div" | "section";
  ariaLabel?: string;
  ariaLabelledby?: string;
}

export const Container = ({ tag = "div", ariaLabel, ariaLabelledby, children }: ContainerProps) => {
  const Tag = tag;

  return (
    <Tag aria-label={ariaLabel} aria-labelledby={ariaLabelledby} className={styles["container"]}>
      {children}
    </Tag>
  );
};
