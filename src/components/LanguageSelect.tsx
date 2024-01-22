import { useTranslation } from "react-i18next";
import { LanguageOption } from "../interfaces/LanguageOptionsInterface";
import { useLanguage } from "../contexts/LanguageContext";

const languageOptions: LanguageOption[] = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
  { value: "de", label: "Deutsch" },
];

export const LanguageSelect = () => {
  const { t } = useTranslation();
  const { language, onLanguageChange } = useLanguage();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    onLanguageChange(selectedValue);
  };

  return (
    <div>
      <select
        value={language}
        onChange={handleLanguageChange}
        className="w-[80px] focus:outline-none bg-transparent text-primary"
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {t(option.label)}
          </option>
        ))}
      </select>
    </div>
  );
};
