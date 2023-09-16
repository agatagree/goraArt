import { FC } from "react";
import { classNames } from "utils/css";
import { SectionLayoutProps } from "./types/section-layout-props";
import styles from "./SectionLayout.module.scss";

export const SectionLayout: FC<SectionLayoutProps> = ({
  children,
  className,
}) => {
  const classItem = classNames(styles.layout, className);
  return <div className={classItem}>{children}</div>;
};
