import { AiFillFacebook } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.FooterLayout}>
      <div className={styles.FooterConatiner}>
        <img src="/assets/logo.svg" alt="logo" />
        &copy; {new Date().getFullYear()} tamaga studio
      </div>
      <div className={styles.FooterConatiner}>
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
