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
        className="w-[90px] lg:w-[90px] text-[18px] leading-[24.2px] md:w-[80px] md:text-[18px] md:leading-[24.2px] sm:w-[75px] sm:text-[16px] sm:leading-[24.2px] xsm:w-[65px] xsm:text-[13px] xsm:leading-[16.2px] focus:outline-none bg-transparent"
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value} className="w-[50px]">
              {t(option.label)}
          </option>
        ))}
      </select>
    </div>
  );
};
