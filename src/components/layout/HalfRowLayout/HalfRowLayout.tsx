import { ReactNode } from "react";
import { classNames } from "utils/css";
import styles from "./HalfRowLayout.module.scss";

type LayoutProps = {
  children: ReactNode;
  variant?: "reverse";
};

export const HalfRowLayout = ({ children, variant }: LayoutProps) => {
  const classItem = classNames(styles.layout, variant && styles[variant]);
  return (
    <div className={classItem}>
      {children}
    </div>
  );
};
