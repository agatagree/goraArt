import { Text } from "components/common";
import { Banner, HalfRowLayout, MainLayout } from "components/layout";
import styles from "./About.module.scss";

export const AboutPage = () => {
  return (
    <>
      <Banner background="assets/aboutIntro.jpg">
        <Text variant="mainHeader" color="primaryLight">
          Wojciech Góra is an contemporary abstract painter based in Poland.
        </Text>
      </Banner>
      <MainLayout gap="g60">
        <HalfRowLayout>
          <div className={styles.description}>
            <Text variant="subHeader">Artist and his workshop.</Text>
            <Text>
              Graduate from the Academy of Fine Arts in Gdańsk. His works were
              exhibited in whole country and gain clients’ recognition in Europe
              e.g. UK or Spain. Experience in design allows him to create with
              craftsmanship precision and at the same time, leaving some space
              for spontaneity and improvisation. His paintings are characterized
              by own technique, mastered over the years, focused on precise
              details, geometry and multilayered textures. In spite inner
              complexity final compositions are always coherent & strong.
            </Text>
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
