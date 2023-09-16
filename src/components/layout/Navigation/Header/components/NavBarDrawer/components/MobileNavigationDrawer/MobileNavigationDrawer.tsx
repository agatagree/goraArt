import { MenuDrawer } from "components/common";
import { PrimaryNavigation } from "../../../PrimaryNavigation";
import { LanguageBtn } from "../../../PrimaryNavigation/components/LanguageBtn";
import styles from "./MobileNavigationDrawer.module.scss";

export const MobileNavigationDrawer = () => {
  return (
    <MenuDrawer>
      <div className={styles.mobileLayout}>
        <div className={styles.mobileLayout}>
          <PrimaryNavigation />
        </div>
        <LanguageBtn />
      </div>
    </MenuDrawer>
  );
};
