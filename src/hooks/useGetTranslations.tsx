import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { getDataFromSnapshot, translationCollection } from "api";

export const useGetTranslations = () => {
  const [translation, setTranslation] = useState<{ [key: string]: string }[]>([]);

  useEffect(() => {
    onSnapshot(translationCollection, (data) => {
      setTranslation(getDataFromSnapshot(data));
    });
  }, []);

  return { translation };
};
