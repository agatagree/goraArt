import { useContext } from "react";
import { LanguageContext } from "providers/LanguageProvider";

export const T = ({ key }: { key: string }) => {
  const { language, translation } = useContext(LanguageContext);
  if (translation) {
    const found = translation.find((obj) => obj.key === key);
    if (found) {
      return <span>{found[language]}</span>;
    }
  }
  return <span>{key}</span>;
};


