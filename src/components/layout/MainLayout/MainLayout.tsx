import { FC } from "react";
import { classNames } from "utils/css";
import { MainLayoutProps } from "./types/main-layout-props";
import styles from "./MainLayout.module.scss";

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  gap,
  fullHeight,
}) => {
  const classLayout = classNames(
    styles.layout,
    fullHeight && styles.fullHeight,
    gap && styles[gap]
  );

  return <div className={classLayout}>{children}</div>;
};
