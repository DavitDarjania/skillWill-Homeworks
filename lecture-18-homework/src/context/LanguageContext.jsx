import { createContext, useContext, useMemo, useState } from "react";

const LanguageContext = createContext(null);

export const LanguageMap = {
  en: {
    form: {
      placeholder: "Input New Task...",
      button: "Update",
    },
    header: {
      language: "Language",
      darkMode: "Dark Mode",
    },
    component: {
      completed: "Completed",
      nonCompleted: "Non Completed",
    },
  },
  ka: {
    form: {
      placeholder: "შეივანე ახალი დავალება...",
      button: "განახლება",
    },
    header: {
      language: "ენა",
      darkMode: "მუქი თემა",
    },
    component: {
      completed: "შესრულებული",
      nonCompleted: "შეუსრულებელი",
    },
  },
};

export const LanguageContextProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const currentMap = LanguageMap[lang];
  const contextValue = useMemo(
    () => ({
      lang,
      setLang,
      currentMap,
    }),
    [lang, setLang]
  );
  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const contextValue = useContext(LanguageContext);
  if (!contextValue) throw new Error("Accessing Provider from outside");
  return contextValue;
};
