import { ReactNode } from "react";
import { Checkbox } from "components/common/Checkbox";
import { Text } from "components/common/Text";
import styles from "./SingleCategory.module.scss";

type CategoryProps = {
  children: ReactNode;
  title: string;
}

export const SingleCategory = ({ children, title }: CategoryProps) => {
  return (
    <div className={styles.categoryLayout}>
      <Text variant="smallHeader" size="sm">
       {title}
      </Text>
      {children}
    </div>
  );
};
