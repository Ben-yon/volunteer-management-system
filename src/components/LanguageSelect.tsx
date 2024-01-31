import { useTranslation } from "react-i18next";
import { LanguageOption } from "../interfaces/LanguageOptionsInterface";
import { useLanguage } from "../contexts/LanguageContext";
import { media } from '../assets'

const languageOptions: LanguageOption[] = [
  { value: "en", label: "English", icon: media.flag_uk },
  { value: "fr", label: "French", icon: media.flag_france },
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
    <div className="flex space-x-1">
      <select
        value={language}
        onChange={handleLanguageChange}
        className="w-[85px] lg:w-[85px]  md:w-[80px] sm:w-[75px]  xsm:w-[75px] focus:outline-none bg-transparent"
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value} className="custom-option">
              {t(option.label)}
          </option>
        ))}
      </select>
    </div>
  );
};
