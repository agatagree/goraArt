import { GalleryType } from "../../../utils/Types";
import { ArrowBtn } from "../../../components/common/Buttons/ArrowBtn/ArrowBtn";
import { Text } from "../../../components/common/Text/Text";
import styles from "./Detail.module.scss";


export const Detail = ({ data }: { data: GalleryType[] }) => {
  return (
    <>
      <div className={styles.DetailSectionLayout}>
        <div className={styles.DetailSectionMessage}>
          <div className={styles.DetailTitle}>
            <Text variant="header" size="xxxl">
              {data[0].mainPageData.title}
            </Text>
          </div>
          <Text>{data[0].mainPageData.description}</Text>
          <ArrowBtn linkTo={"/about"} text={"Read more"} />
        </div>
        <img
          className={styles.DetailImg}
          src="https://firebasestorage.googleapis.com/v0/b/gora0-8bdf5.appspot.com/o/gallery%2Fred-0422-mainPage.png?alt=media&token=416e2f3f-03df-4038-aecc-d9ead8a8fb7d"
          alt={data[0].title}
        />
      </div>
    </>
  );
};
