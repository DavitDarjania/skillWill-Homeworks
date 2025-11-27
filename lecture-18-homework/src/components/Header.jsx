import { useEffect } from "react";
import { LanguageMap, useLanguageContext } from "../context/LanguageContext";

const Header = () => {
  const { lang, setLang, currentMap } = useLanguageContext();
  return (
    <>
      <header className="flex w-fit mx-auto gap-5 mt-5">
        <label className="flex items-center cursor-pointer gap-3">
          <span className="text-gray-700">{currentMap.header.language}</span>

          <div className="relative">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={(e) =>
                e.target.checked ? setLang("ka") : setLang("en")
              }
            />
            <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-green-300 transition"></div>
            <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-all peer-checked:translate-x-6"></div>
          </div>
        </label>
      </header>
    </>
  );
};

export default Header;
