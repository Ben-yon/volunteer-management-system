import { ReactNode } from "react";

export interface LanguageSelectProps {
    language: string;
    onLanguageChange: (value: string) => void
}


export interface LanguageChildren {
    children: ReactNode
}