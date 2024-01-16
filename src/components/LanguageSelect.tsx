import { useTranslation } from "react-i18next";
import { LanguageOption } from "../interfaces/LanguageOptionsInterface";
import { LanguageSelectProps } from "../interfaces/LanguageSelectProps";
import React, { useState } from "react";

const languageOptions: LanguageOption[] = [
    { value: 'en', label: 'English'},
    { value: 'fr', label: 'French'},
    { value: 'de', label: 'Deutsch'}
];


export const LanguageSelect = ( { onLanguageChange }: LanguageSelectProps ) => {
    const { t } = useTranslation();

    const [selectedLanguage, setSelectedLanguage ] = useState<string>();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedLanguage(selectedValue);
        onLanguageChange(selectedValue);
    };

    return (
        <select value={selectedLanguage} onChange={handleLanguageChange} className="w-[70px] bg-transparent text-primary">
            { languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                    {t(option.label)}
                </option>
            ))}
        </select>
    )

}