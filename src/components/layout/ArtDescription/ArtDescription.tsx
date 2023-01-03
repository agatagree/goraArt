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
  return (
    <div className={styles.imgDescription}>
      <Text size="sm">
        {title} {code} / {technique} / {width}x{height}cm / {year}
      </Text>
    </div>
  );
};
