import styles from "./Footer.module.scss";
import { AiFillFacebook } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";

export const Footer = () => {
  return (
    <div className={styles.FooterLayout}>
      <img src="/assets/logo.svg" alt="logo" />
      <div className={styles.FooterMediaLink}>
        <a href="https://www.facebook.com/wojciech.gora/">
          <AiFillFacebook className={styles.FooterIconFacebook} />
        </a>
        <a href="https://www.instagram.com/_wojciech_gora_/?fbclid=IwAR3ZjSl3pDKGP8OQgJiLWBWHyf75Zv5Cbu3LZM6QUDxfVRBVANA6BwDBYNc">
          <ImInstagram className={styles.FooterIcon} />
        </a>
      </div>
    </div>
  );
};
