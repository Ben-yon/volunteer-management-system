import { createContext, useContext } from "react";
import { LanguageSelectProps } from "../interfaces/LanguageSelectProps";


export const LanguageContext = createContext<LanguageSelectProps | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if(!context){
        throw new Error('useLanguage must be used within a LanguageProvider')
    }   
    return context
}

