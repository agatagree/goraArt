import { useTranslation } from "react-i18next";
import { Btn, Text } from "components/common";
import styles from "./ContactPage.module.scss";

export const ContactPage = () => {
  const { t } = useTranslation(["static", "dynamic"]);
  return (
    <div className={styles.layout}>
      <div className={styles.text}>
        <Text variant="subHeader">{t("contactPage.title")}</Text>
        <div className={styles.contactGroup}>
          <Btn
            as={"a"}
            href="mailto:w.goora@gmail.com"
            size="xxl"
            target="_blank"
            rel="noopener noreferrer"
          >
            w.goora@gmail.com
          </Btn>
          <Btn
            as={"a"}
            href="tel:+48505285476"
            size="xxl"
            noWrap
            target="_blank"
            rel="noopener noreferrer"
          >
            +48-505-285-476
          </Btn>
        </div>
        <div className={styles.contactGroup}>
          <Btn
            as={"a"}
            href="https://www.instagram.com/_wojciech_gora_/?fbclid=IwAR3ZjSl3pDKGP8OQgJiLWBWHyf75Zv5Cbu3LZM6QUDxfVRBVANA6BwDBYNc/"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Btn>
          <Btn
            as={"a"}
            href="https://www.facebook.com/wojciech.gora/"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Btn>
        </div>
      </div>
      <img
        src="assets/aboutContact.jpg"
        alt="art Wojciech Gora"
        className={styles.image}
      />
    </div>
  );
};
