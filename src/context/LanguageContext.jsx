import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "fr") return stored;
  } catch (e) {
    // localStorage unavailable, ignore
  }
  if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("fr")) {
    return "fr";
  }
  return "en";
}

function get(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      // localStorage unavailable, ignore
    }
  }, [lang]);

  const toggleLanguage = () => setLang((l) => (l === "en" ? "fr" : "en"));

  const t = (path, ...args) => {
    const value = get(translations[lang], path) ?? get(translations.en, path);
    return typeof value === "function" ? value(...args) : value ?? path;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
