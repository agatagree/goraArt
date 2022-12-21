import { Text } from "components/common";
import { Banner } from "components/layout";

export const AboutPage = () => {
  return (
    <>
      <Banner background="assets/aboutIntro.jpg">
        <Text variant="mainHeader" color="primaryLight">
          Wojciech Góra is an contemporary abstract painter based in Poland.
        </Text>
      </Banner>
    </>
  );
};
