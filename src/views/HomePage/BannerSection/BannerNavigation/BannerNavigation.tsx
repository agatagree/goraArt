import { VscArrowRight } from "react-icons/vsc";
import { useState } from "react";
import styles from "./BannerNavigation.module.scss";

type DirectionProps = {
  direction: string;
  onClick: () => void;
};

export const BannerNavigation = (props: DirectionProps) => {
  const [showArrow, setShowArrow] = useState(false);

  const handleArrow = () => {
    return setShowArrow(!showArrow);
  };

  return (
    <>
      <button
        className={`${styles.btnSliderWrapper} + ${styles[props.direction]}`}
        onMouseEnter={handleArrow}
        onMouseLeave={handleArrow}
        onClick={props.onClick}
      >
        {showArrow ? (
          <VscArrowRight
            className={`${styles.btnSliderIcon} ${styles[props.direction]}`}
          />
        ) : null}
      </button>
    </>
  );
};
