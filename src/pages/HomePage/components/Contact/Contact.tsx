import { useTranslation } from "react-i18next";
import { ImInstagram, ImFacebook2 } from "react-icons/im";
import { Btn, Text, TextVariant } from "components/common";
import { SectionLayout } from "components/layout";
import styles from "./Contact.module.scss";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout className={styles.layout}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Text variant={TextVariant.basicHeader}>
            {t("home-page.contact.title")}
          </Text>
        </div>
        <div className={styles.subtitle}>
          <Text variant={TextVariant.basicHeader}>
            {t("home-page.contact.subtitle")}
          </Text>
        </div>
        <div className={styles.contactInfo}>
          <Text>{t("home-page.contact.e-mail")}</Text>
          <Text>{t("home-page.contact.telephone")}</Text>
        </div>
        <div className={styles.icons}>
          <Btn
            as={"a"}
            href="https://www.facebook.com/wojciech.gora/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBtn}
          >
            <ImFacebook2 className={styles.icon} />
          </Btn>
          <Btn
            as={"a"}
            href="https://www.instagram.com/_wojciech_gora_/?fbclid=IwAR3ZjSl3pDKGP8OQgJiLWBWHyf75Zv5Cbu3LZM6QUDxfVRBVANA6BwDBYNc/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBtn}
          >
            <ImInstagram className={styles.icon} />
          </Btn>
        </div>
      </div>
    </SectionLayout>
  );
};
