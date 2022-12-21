import { ReactNode } from "react";
import { Loader } from "components/common";
import styles from "./Banner.module.scss";

type BannerTypes = {
  background?: string;
  children?: ReactNode;
};

export const Banner = ({ background, children }: BannerTypes) => {
  return (
    <>
      {background ? (
        <div className={styles.layout}>
          <div className={styles.content}>{children}</div>
          <div className={styles.overlay}></div>
          <img src={background} alt="art" className={styles.image} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
