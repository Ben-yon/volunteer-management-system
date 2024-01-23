import React, { useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { LanguageChildren, LanguageSelectProps } from "../interfaces/LanguageSelectProps";
import i18n from "../utils/i18n"

export const LanguageProvider: React.FC<LanguageChildren> = ({ children }) => {

    const [ language, setSelectedLanguage ]  = useState<string>(i18n.language);
    
    const onLanguageChange = (lang: string) => {
        setSelectedLanguage(lang);
        i18n.changeLanguage(lang);
    }

    const contextValue: LanguageSelectProps = {
        language,
        onLanguageChange
    };
    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    )


}