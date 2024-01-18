import React from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { LanguageChildren, LanguageSelectProps } from "../interfaces/LanguageSelectProps";
import i18n from "../utils/i18n"

export const LanguageProvider: React.FC<LanguageChildren> = ({ children }) => {
    const onLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
    }

    const contextValue: LanguageSelectProps = {
        language: i18n.language,
        onLanguageChange
    };

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    )


}