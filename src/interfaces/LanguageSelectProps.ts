import { ReactNode } from "react";

export interface LanguageSelectProps {
    language: string;
    onLanguageChange: (lang: string) => void
}


export interface LanguageChildren {
    children: ReactNode
}