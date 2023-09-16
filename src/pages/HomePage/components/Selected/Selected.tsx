import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Btn } from "components/common";
import { HalfRowLayout, SectionTitleLayout } from "components/layout";
import { SelectedProps } from "./types/selected-props";
import styles from "./Selected.module.scss";

export const Selected: FC<SelectedProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitleLayout
        text={
          <>
            {t("homePage.selectedTitle1")}
            <br />
            {t("homePage.selectedTitle2")}
          </>
        }
      />
      <div className={styles.layout}>
        {data.map((element) => (
          <HalfRowLayout
            key={element.id}
            variant="reverse"
            icon={element.mainPageData.icon}
            title={t(element.mainPageData.title, "selected works", {
              ns: "dynamic",
            })}
            description={t(element.mainPageData.description, "", {
              ns: "dynamic",
            })}
            link={`/gallery/${element.id}`}
            artId={element.id}
            artTitle={element.title}
            artViz={element.img.wiz}
            artCover={element.img.cover}
            artCode={element.code}
            artYear={element.year}
            artTechnique={element.technique}
            artWidth={element.dimensions.width}
            artHeight={element.dimensions.height}
          />
        ))}
      </div>
      <div className={styles.buttonMore}>
        <Btn as={Link} to="/gallery" size="lg" variant="arrow">
          {t("homePage.selectedBtn")}
        </Btn>
      </div>
    </>
  );
};
