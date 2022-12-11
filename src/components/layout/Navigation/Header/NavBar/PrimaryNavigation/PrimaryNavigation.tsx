import { Btn } from "../../../../../common/Buttons/Btn/Btn";
import styles from "./PrimaryNavigation.module.scss";

export const PrimaryNavigation = () => {
  return (
    <div className={styles.navBarLinksWrapper}>
      <Btn as="navlink" to="/gallery" variant="Text">Gallery</Btn>
      <Btn as="navlink" to="/about" variant="Text">About</Btn>
    </div>
  );
};
