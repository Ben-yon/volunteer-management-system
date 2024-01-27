import { useTranslation } from "react-i18next";
import { LanguageOption } from "../interfaces/LanguageOptionsInterface";
import { useLanguage } from "../contexts/LanguageContext";
import { media } from '../assets'

const languageOptions: LanguageOption[] = [
  { value: "en", label: "English", icon: media.flag_uk },
  { value: "fr", label: "French", icon: media.flag_france },
  { value: "de", label: "Deutsch", icon: "" },
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
      <img src={media.lang} alt="language" className="w-[31px] h-[29.1px] lg:w-[31px] lg:h-[29.1px]"/>
      <select
        value={language}
        onChange={handleLanguageChange}
        className="w-[85px] lg:w-[85px] lg:text-[20px] md:w-[70px] sm:w-[70px] xsm:w-[60px] focus:outline-none bg-transparent text-primary"
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
