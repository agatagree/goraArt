import { FC } from "react";
import { useTranslation } from "react-i18next";
import { SectionTitleLayout } from "components/layout";
import { OfferCard } from "./components/OfferCard/OfferCard";
import { OfferProps } from "./types/offer-props";
import styles from "./Offer.module.scss";

export const Offer: FC<OfferProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitleLayout text={t("home-page.offer.main-title")} />
      <div className={styles.layout}>
        {data.map((element) => (
          <OfferCard
            key={element.mainPageData.mainPagePosition}
            id={element.mainPageData.mainPagePosition}
            imgPath={element.img.wiz}
          />
        ))}
      </div>
    </>
  );
};
