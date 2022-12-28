import { ReactNode } from "react";
import { classNames } from "utils/css";
import styles from "./MainLayout.module.scss";

type MainLayoutProps = {
  children: ReactNode;
  gap?: "g180" | "g120" | "g60";
};

export const MainLayout = ({ children, gap }: MainLayoutProps) => {
  const classItem = classNames(styles.layout, gap && styles[gap]);
  return <div className={classItem}>{children}</div>;
};
