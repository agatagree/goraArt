import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Btn, Text, TextVariant } from "components/common";
import { HalfRowTextSectionProps } from "../../types";
import { TextSectionLayoutVariant } from "./enums/text-section-layout-variant";
import styles from "./TextSection.module.scss";

export const TextSection: FC<HalfRowTextSectionProps> = ({
  title,
  titleVariant = TextVariant.subHeader,
  description,
  icon,
  textSectionVariant = TextSectionLayoutVariant.fullHeight,
  isEndingBtn = false,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles[textSectionVariant]}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          {icon && (
            <div className={styles.iconWrapper}>
              <img src={icon} alt={title} className={styles.icon} />
            </div>
          )}
          <Text variant={titleVariant}>{title}</Text>
        </div>
        {description}
      </div>
      {isEndingBtn && (
        <div className={styles.btn}>
          <Btn as={Link} to="/gallery" variant="arrow">
            {t("home-page.selected.btn")}
          </Btn>
        </div>
      )}
    </div>
  );
};
