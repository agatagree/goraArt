import { MenuDrawer } from "components/common";
import { PrimaryNavigation } from "../../../PrimaryNavigation";
import styles from "./MobileNavigationDrawer.module.scss";

export const MobileNavigationDrawer = () => {
  return (
    <MenuDrawer>
      <div className={styles.mobileLayout}>
        <PrimaryNavigation />
      </div>
    </MenuDrawer>
  );
};
