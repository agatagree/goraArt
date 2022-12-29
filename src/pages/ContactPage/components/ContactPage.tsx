import { Btn, Text } from "components/common";
import styles from "./ContactPage.module.scss";

export const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.text}>
        <Text variant="subHeader">Interested in my art? Let’s talk.</Text>
        <div className={styles.contactGroup}>
          <Btn as={"a"} href="mailto:w.goora@gmail.com" size="xxl">
            w.goora@gmail.com
          </Btn>
          <Btn as={"a"} href="tel:+48505285476" size="xxl" noWrap>
            +48-505-285-476
          </Btn>
        </div>
        <div className={styles.contactGroup}>
          <Btn
            as={"a"}
            href="https://www.instagram.com/_wojciech_gora_/?fbclid=IwAR3ZjSl3pDKGP8OQgJiLWBWHyf75Zv5Cbu3LZM6QUDxfVRBVANA6BwDBYNc/"
            size="lg"
          >
            Instagram
          </Btn>
          <Btn
            as={"a"}
            href="https://www.facebook.com/wojciech.gora/"
            size="lg"
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
