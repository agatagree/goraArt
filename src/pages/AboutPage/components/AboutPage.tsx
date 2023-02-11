import { useTranslation } from "react-i18next";
import { Text } from "components/common";
import { Banner, HalfRowLayout, MainLayout } from "components/layout";
import styles from "./About.module.scss";

export const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Banner background="assets/aboutIntro.jpg">
        <Text variant="mainHeader" color="primaryLight">
          {t("aboutPage.title")}
        </Text>
      </Banner>
      <MainLayout gap="g60">
        <HalfRowLayout>
          <div className={styles.description}>
            <Text variant="subHeader">{t("aboutPage.subTitle")}</Text>
            <Text>{t("aboutPage.description")}</Text>
          </div>
          <img
            src="./assets/aboutProcess.jpg"
            alt="art Wojciech Gora"
            className={styles.image}
          />
        </HalfRowLayout>
        <HalfRowLayout>
          <img
            src="./assets/aboutProcess2.jpg"
            alt="art Wojciech Gora"
            className={styles.image}
          />
        </HalfRowLayout>
      </MainLayout>
    </>
  );
};
