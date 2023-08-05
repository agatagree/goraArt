import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "components/common";
import styles from "./TextSection.module.scss";

type SectionProps = {
  title: string;
  description?: string;
  icon?: string;
};

export const TextSection: FC<SectionProps> = ({
  data,
}) => {
  const { t } = useTranslation("dynamic");
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.sectionTitleContainer}>
        {icon && <img src={icon} alt={title} />}
        <div className={styles.sectionTitle}>
          <Text variant="header" size="xl">
            {t(title, "selected works", { ns: "dynamic" })}
          </Text>
        </div>
      </div>
      {description && (
        <div className={styles.sectionDescription}>
          <Text>{t(description, "", { ns: "dynamic" })}</Text>
        </div>
      )}
    </div>
  );
};
