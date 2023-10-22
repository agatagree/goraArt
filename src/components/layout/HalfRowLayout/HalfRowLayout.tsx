import { FC } from "react";
import { SectionLayout } from "../SectionLayout";
import { ImgSection } from "./components/ImgSection";
import { TextSection } from "./components/TextSection";
import { HalfRowLayoutProps } from "./types/half-row-layout-props";
import styles from "./HalfRowLayout.module.scss";

export const HalfRowLayout: FC<HalfRowLayoutProps> = ({
  title,
  titleVariant,
  description,
  icon,
  variant,
  imgPath,
  artTitle,
  link,
  artId,
  artViz,
  artCode,
  artYear,
  artTechnique,
  artWidth,
  artHeight,
  artCover,
  textSectionVariant,
  isEndingBtn
}) => {
  return (
    <SectionLayout
      className={(variant && styles[variant])}
    >
      <div className={styles.wrapper}>
        <TextSection
          title={title}
          titleVariant={titleVariant}
          description={description}
          icon={icon}
          textSectionVariant={textSectionVariant}
          isEndingBtn={isEndingBtn}
        />
      </div>
      <div className={styles.wrapper}>
        <ImgSection
          imgPath={imgPath}
          artTitle={artTitle}
          link={link}
          artId={artId}
          artViz={artViz}
          artCode={artCode}
          artYear={artYear}
          artTechnique={artTechnique}
          artWidth={artWidth}
          artHeight={artHeight}
          artCover={artCover}
        />
      </div>
    </SectionLayout>
  );
};
