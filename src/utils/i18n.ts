import i18next from "i18next";
import { initReactI18next } from "react-i18next";


export const i18n = i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {

                },
            },
            fr: {
                translation: {

                },
            },
            de: {
                translation: {

                },
            },
        },
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    })