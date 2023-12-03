import { ImInstagram, ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { Text, Btn } from "components/common";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footerLayout}>
      <div className={styles.footerContainer}>
        <Btn as={Link} to="/" className={styles.iconBtn}>
          <img
            src="/assets/logoSubstract.svg"
            alt="logo"
            className={styles.logo}
            loading="lazy"
          />
        </Btn>
        <Text size="sm">&copy; {new Date().getFullYear()} tamaga studio</Text>
      </div>
      <div className={styles.btnContainer}>
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
  );
};
