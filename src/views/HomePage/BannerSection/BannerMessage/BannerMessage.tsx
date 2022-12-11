import { Text } from "../../../../components/common/Text/Text";
import styles from "./BannerMessage.module.scss";

export const BannerMessage = () => {
  return (
    <div className={styles.HeroTextContainer}>
      <Text variant="mainHeader" color="primaryLight">
        Wojciech Góra
        <br />
        paintings
      </Text>
      <div className={styles.HeroSubtextContainer}>
        <Text variant="header" size="xl" color="primaryLight">
          Art to match your space
          </Text>
        <img
          className={styles.HeroSubtextIcon}
          src="/assets/arrow.svg"
          alt="arrow down"
        />
      </div>
    </div>
  );
};
