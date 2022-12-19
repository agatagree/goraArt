import { useContext } from "react";
import { ExitBtn } from "components/common/Buttons";
import { Text } from "components/common/Text";
import { NavBarContext } from "../../../Header";
import styles from "./DrawerHeader.module.scss";

export const DrawerHeader = ({ title }: { title: string }) => {
  const { setActiveDrawer, isOpen, setIsOpen } = useContext(NavBarContext);
  const handleClick = () => {
    setActiveDrawer("");
    setIsOpen(!isOpen);
  };
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Text variant="smallHeader" size="sm">
          {title}
        </Text>
      </div>
      <ExitBtn onClick={handleClick} />
    </header>
  );
};
