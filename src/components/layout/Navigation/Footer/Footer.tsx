import { AiFillFacebook } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import { Link } from "react-router-dom";
import { Btn } from "../../../common/Buttons/Btn/Btn";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.FooterLayout}>
      <div className={styles.FooterContainer}>
        <Btn as={Link} to="/">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className={styles.FooterIcon}
          />
        </Btn>
        &copy; {new Date().getFullYear()} tamaga studio
      </div>
      <div className={styles.FooterContainer}>
        <Btn as={"a"} href="https://www.facebook.com/wojciech.gora/">
          <AiFillFacebook className={styles.FooterIconFacebook} />
        </Btn>
        <Btn
          as={"a"}
          href="https://www.instagram.com/_wojciech_gora_/?fbclid=IwAR3ZjSl3pDKGP8OQgJiLWBWHyf75Zv5Cbu3LZM6QUDxfVRBVANA6BwDBYNc/"
        >
          <ImInstagram className={styles.FooterIcon} />
        </Btn>
      </div>
    </div>
  );
};
