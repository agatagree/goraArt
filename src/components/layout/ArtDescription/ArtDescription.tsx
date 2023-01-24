// import { t } from "utils/translation"
import { useContext } from "react";
import { Text } from "components/common";
import { LanguageContext } from "providers/LanguageProvider";
import styles from "./ArtDescription.module.scss";

type SelectedTypes = {
  year: number;
  technique: string;
  title: string;
  code: string;
  width: number;
  height: number;
};

export const ArtDescription = ({
  title,
  code,
  year,
  technique,
  width,
  height,
}: SelectedTypes) => {
  const { language, translation } = useContext(LanguageContext);

  const t = (props: string) => {
    if (translation && props && language) {
      return translation.find((obj) => obj.key === props)?.[language];
    }
    return props;
  };
  // console.log(t("Oil paint on wooden board"));

  const x = technique
  console.log(technique)
  console.log(t(technique))

  return (
    <div className={styles.imgDescription}>
      <Text size="sm">
        {title} {code} / {t(technique)} / {width}x{height}cm / {year}
      </Text>
    </div>
  );
};
