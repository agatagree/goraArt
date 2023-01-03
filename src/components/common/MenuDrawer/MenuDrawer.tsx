import { ReactNode } from "react";
import { classNames } from "utils/css";
import styles from "./MenuDrawer.module.scss";

type DrawerProps = {
  children: ReactNode;
  variant?: "gallery";
};

export const MenuDrawer = ({ children, variant, ...props }: DrawerProps) => {
  const classItem = classNames(styles.drawerLayout, variant && styles[variant]);
  return (
    <div className={classItem} {...props}>
      {children}
    </div>
  );
};
