import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
    >
      {i18n.language === "en" ? "Mudar para PT-BR" : "Switch to EN"}
    </button>
  );
}
