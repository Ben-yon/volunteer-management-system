import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";
import Backend from 'i18next-http-backend';
import { availableLanguages } from "./constants";


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
    .use(Backend)
    .use(initReactI18next)
    .init({
        // resources: resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        supportedLngs:availableLanguages,
        backend: {
            loadPath:'/src/utils/locales/{{lng}}.json'
        },
        interpolation: {
            escapeValue: false
        }
    })

    export default i18n;    