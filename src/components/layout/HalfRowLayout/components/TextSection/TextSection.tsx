import { FC } from "react";
import { Text } from "components/common";
import { HalfRowTextSectionProps } from "../../types";
import styles from "./TextSection.module.scss";

export const TextSection: FC<HalfRowTextSectionProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          {icon && <img src={icon} alt={title} />}
          <Text variant="subHeader">{title}</Text>
        </div>
        {description && <Text>{description}</Text>}
      </div>
    </div>
  );
};
