import { Text } from "components/common";
import styles from "./MessagePage.module.scss";

const messageType = {
  pageNotFound: {
    text: "Ups! page not found",
    img: "./assets/404.png",
    alt: "page not found",
  },
  underConstruction: {
    text: "Sorry, page under construction",
    img: "./assets/UnderConstruction.png",
    alt: "website underconstruction",
  },
  search: {
    text: "Sorry, there is nothing here",
    img: "./assets/Search.png",
    alt: "empty search",
  },
};

type MessageName = {
  message: keyof typeof messageType;
};

export const MessagePage = ({ message }: MessageName) => {
  return (
    <div className={styles.messageLayout}>
      <img
        className={styles.messageImg}
        alt={messageType[message].alt}
        src={messageType[message].img}
        loading="lazy"
      />
      <Text>{messageType[message].text}</Text>
    </div>
  );
};
