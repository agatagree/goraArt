import { VscArrowDown } from "react-icons/vsc";
import { Text } from "components/common/Text";
import styles from "./BannerMessage.module.scss";

export const BannerMessage = () => {
  return (
    <>
      <Text variant="mainHeader" color="primaryLight">
        Wojciech Góra
        <br />
        paintings
      </Text>
      <div className={styles.heroSubtextContainer}>
        <Text variant="header" size="xl" color="primaryLight">
          Art to match your space
        </Text>
        <Text variant="header" size="xxl" color="primaryLight">
          <VscArrowDown />
        </Text>
      </div>
    </>
  );
};
