import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { getDataFromSnapshot, translationCollection } from "api";
import i18next from "i18next";

export const useGetTranslations = () => {
  const [translation, setTranslation] = useState<{ [key: string]: string }[]>(
    []
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(translationCollection, (data) => {
      setTranslation(getDataFromSnapshot(data));
    });
    return unsubscribe;
  }, []);
  i18next.addResourceBundle(
    "en",
    "dynamic",
    translation[0] && translation[0].EN
  );
  i18next.addResourceBundle(
    "pl",
    "dynamic",
    translation[0] && translation[0].PL
  );

  return;
};
