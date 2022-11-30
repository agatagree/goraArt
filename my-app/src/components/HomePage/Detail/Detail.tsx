import styles from "./Detail.module.scss";
import { galleryType } from "../HomePage";
import { Button } from "../../utils/Button/Button";

export const Detail = ({ data }: { data: galleryType[] }) => {
  return (
    <>
      <div className={styles.DetailSectionLayout}>
        <div className={styles.DetailSectionMessage}>
          <h3 className={styles.DetailTitle}>{data[0].mainPageData.title}</h3>
          <p className={styles.DetailDescription}>
            {data[0].mainPageData.description}
          </p>
          <Button linkTo={"/about"} text={"Read more"} />
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
