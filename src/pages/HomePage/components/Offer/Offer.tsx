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
      <SectionTitleLayout text={t("homePage.offerSection.offerMainTitle")} />
      <div className={styles.layout}>
        {data.map((element) => (
          <OfferCard
            title={element.mainPageData.title}
            description={element.mainPageData.description}
            imgPath={element.img.wiz}
            key={element.mainPageData.mainPagePosition}
          />
        ))}
      </div>
    </>
  );
};
