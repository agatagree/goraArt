import { useTranslation } from "react-i18next";
import { Text, TextVariant } from "components/common";
import { SectionLayout } from "components/layout";
import styles from "./Contact.module.scss";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout className={styles.layout}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Text variant={TextVariant.mainHeader}>
            {t("home-page.contact.title")}
          </Text>
        </div>
        <div className={styles.subtitle}>
          <Text variant={TextVariant.subHeader}>
            {t("home-page.contact.subtitle")}
          </Text>
        </div>
        <div className={styles.contactInfo}>
          <Text>{t("home-page.contact.e-mail")}</Text>
          <Text>{t("home-page.contact.telephone")}</Text>
        </div>
      </div>
    </SectionLayout>
  );
};
