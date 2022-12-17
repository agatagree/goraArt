import { Text } from "../../common/Text/Text";
import styles from "./ArtDescription.module.scss";

interface SelectedTypes {
  year: number;
  technique: string;
  title: string;
  code: string;
  width: number;
  height: number;
}

export const ArtDescription = ({
  title,
  code,
  year,
  technique,
  width,
  height,
}: SelectedTypes) => {
  return (
    <div className={styles.ImgDescription}>
      <Text size="sm">
        {title} {code} / {technique} / {width}x{height}cm / {year}
      </Text>
    </div>
  );
};
