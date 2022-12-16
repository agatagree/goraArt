import { NavLink } from "react-router-dom";
import { Btn } from "components/common/Buttons";
import styles from "./PrimaryNavigation.module.scss";

export const PrimaryNavigation = () => {
  return (
    <div className={styles.navBarLinksWrapper}>
      <Btn as={NavLink} to="/gallery" variant="Text">Gallery</Btn>
      <Btn as={NavLink} to="/about" variant="Text">About</Btn>
    </div>
  );
};
