import { createContext, useState, ReactNode } from "react";

type LanguageContextType = {
  language: "PL" | "EN";
  setLanguage: (newLanguage: "PL" | "EN") => void;
};

const initialState: LanguageContextType = {
  language: "PL",
  setLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(initialState);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"PL" | "EN">("PL");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
