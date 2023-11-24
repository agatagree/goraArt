import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Btn } from "components/common";

export const LanguageBtn = () => {
  const [languageBtn, setLanguageBtn] = useState<"PL" | "EN">("EN");
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    setLanguageBtn(languageBtn === "PL" ? "EN" : "PL");
    i18n.changeLanguage(i18n.language === "pl" ? "en" : "pl");
  };
  return (
    <Btn onClick={changeLanguage} size="s">
      {languageBtn}
    </Btn>
  );
};
