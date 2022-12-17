import { ReactNode } from "react";
import styles from "./MenuDrawer.module.scss";
import { classNames } from "utils/css";

type DrawerProps = {
  children: ReactNode;
  variant?: "gallery" | "fullHeight";
};

export const MenuDrawer = ({ children, variant, ...props }: DrawerProps) => {
const classItem = classNames(
  styles.drawerLayout,
  variant && styles[variant]
)
  return (
    <div className={classItem}{...props}>
      {children}
    </div>
  );
};
