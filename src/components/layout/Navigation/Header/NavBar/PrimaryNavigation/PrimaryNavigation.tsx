import { NavLink, Link } from "react-router-dom";
import { Btn } from "../../../../../common/Buttons/Btn/Btn";
import styles from "./PrimaryNavigation.module.scss";

export const PrimaryNavigation = () => {
  return (
    <div className={styles.navBarLinksWrapper}>
      <Btn as={NavLink} to="/gallery" variant="Text">Gallery</Btn>
      <Btn as={NavLink} to="/about" variant="Text">About</Btn>
    </div>
  );
};
