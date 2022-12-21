import { ReactNode } from "react";
import { classNames } from "utils/css";
import styles from "./HalfRowLayout.module.scss";

type LayoutProps = {
  children: ReactNode;
  index?: string;
  variant?: "reverse";
};

export const HalfRowLayout = ({ children, index, variant }: LayoutProps) => {
  const classItem = classNames(styles.layout, variant && styles[variant]);
  return (
    <div key={index} className={classItem}>
      {children}
    </div>
  );
};
