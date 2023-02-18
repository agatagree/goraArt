import { useTranslation } from "react-i18next";
import { Text } from "components/common";
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
  const { t } = useTranslation(["static", "dynamic"]);

  return (
    <div className={styles.imgDescription}>
      <Text size="sm">
        {title} {code} / {t(technique, { ns: "dynamic" })} / {width}x{height}cm
        / {year}
      </Text>
    </div>
  );
};
