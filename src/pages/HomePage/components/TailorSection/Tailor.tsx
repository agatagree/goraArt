import { Text } from "components/common";
import { GalleryType } from "utils/Types";
import styles from "./Tailor.module.scss";

export const Tailor = ({ data }: { data: GalleryType[] }) => {
  return (
    <>
      <div className={styles.introText}>
        <Text variant="header" size="xxxl">
          Original, abstract oil paintings
          <br />
          tailored to your space.
        </Text>
      </div>
      <img
        className={styles.introImg}
        src={data[0].img.wiz}
        alt={data[0].title}
      />
    </>
  );
};
