import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./languages/en.json";
import frTranslation from "./languages/fr.json"


export const resources = {
    en: {
        translation: enTranslation,
    },
    fr: {
        translation: frTranslation,
    },
    de: {
        translation: {

        },
    },
}




i18n
    .use(initReactI18next)
    .init({
        resources: resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    })

    export default i18n