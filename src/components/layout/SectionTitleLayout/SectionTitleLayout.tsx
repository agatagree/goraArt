import { Text } from "components/common";
import { classNames } from "utils/css";
import { SectionTitleLayoutProps } from "./types/section-title-layout-props";
import styles from "./SectionTitleLayout.module.scss";

export const SectionTitleLayout = ({
  text,
  className,
}: SectionTitleLayoutProps) => {
  const classItem = classNames(styles.layout, className);
  return (
    <div className={classItem}>
      <Text variant="mainHeader">{text}</Text>
    </div>
  );
};
