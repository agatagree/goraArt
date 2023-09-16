import { useTranslation } from "react-i18next";
import { Text } from "components/common";
import { SectionLayout } from "components/layout";
import styles from "./Contact.module.scss";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout className={styles.layout}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Text variant="mainHeader">{t("homePage.contactSection.title")}</Text>
        </div>
        <div className={styles.subtitle}>
          <Text variant="subHeader">{t("homePage.contactSection.subtitle")}</Text>
        </div>
        <div className={styles.contactInfo}>
          <Text>{t("homePage.contactSection.e-mail")}</Text>
          <Text>{t("homePage.contactSection.telephone")}</Text>
        </div>
      </div>
    </SectionLayout>
  );
};
