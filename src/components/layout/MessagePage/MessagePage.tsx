import { Text } from "components/common";
import styles from "./MessagePage.module.scss";

const messageType = {
  pageNotFound: {
    text: "Ups! page not found",
    img: "https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?w=996&t=st=1665684552~exp=1665685152~hmac=ac9bf94fac80e1abda4518b89b42c3cfc6658bcfce715107555da20cd55f4ea7",
    alt: "page not found",
  },
  underConstruction: {
    text: "Sorry, page under construction",
    img: "https://img.freepik.com/premium-vector/construction-website-page-web-page-vector-illustration_123447-3974.jpg?w=826",
    alt: "website underconstruction",
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
      />
      <Text>{messageType[message].text}</Text>
    </div>
  );
};
