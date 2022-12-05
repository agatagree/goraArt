import styles from "./OverlayMenu.module.scss"

export const OverlayMenu = (props:{onClick:()=>void}) => {

  return (
    <div
      className={styles.toggleOverlay}
      onClick={props.onClick}
    ></div>
  );
};
