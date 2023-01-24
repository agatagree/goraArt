import { useContext } from "react";
import { VscArrowDown } from "react-icons/vsc";
import { Text } from "components/common/Text";
import { LanguageContext } from "providers/LanguageProvider";
import styles from "./BannerMessage.module.scss";

export const BannerMessage = () => {
  const { staticText } = useContext(LanguageContext);
  return (
    <>
      <Text variant="mainHeader" color="primaryLight">
        {staticText.homePage.introMain}
        <br />
        {staticText.homePage.introSecondary}
      </Text>
      <div className={styles.heroSubtextContainer}>
        <Text variant="header" size="xl" color="primaryLight">
          {staticText.homePage.introSubtitle}
        </Text>
        <Text variant="header" size="xxl" color="primaryLight">
          <VscArrowDown />
        </Text>
      </div>
    </>
  );
};
