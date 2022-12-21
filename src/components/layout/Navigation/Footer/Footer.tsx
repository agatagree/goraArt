import { AiFillFacebook } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import { Link } from "react-router-dom";
import { Text, Btn } from "components/common";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footerLayout}>
      <div className={styles.footerContainer}>
        <Btn as={Link} to="/">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className={styles.footerIcon}
          />
        </Btn>
        <Text size="sm">&copy; {new Date().getFullYear()} tamaga studio</Text>
      </div>
      <div className={styles.footerContainer}>
        <Btn as={"a"} href="https://www.facebook.com/wojciech.gora/">
          <AiFillFacebook className={styles.footerIconFacebook} />
        </Btn>
        <Btn
          as={"a"}
          href="https://www.instagram.com/_wojciech_gora_/?fbclid=IwAR3ZjSl3pDKGP8OQgJiLWBWHyf75Zv5Cbu3LZM6QUDxfVRBVANA6BwDBYNc/"
        >
          <ImInstagram className={styles.footerIcon} />
        </Btn>
      </div>
    </div>
  );
};
