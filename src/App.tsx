import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes/AppRoute';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import { useEffect, useState, useTransition } from 'react';
import { LanguageSelect } from './components/LanguageSelect';
//import { styles } from './styles';

i18next
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

function App() {
  // const { t } = useTransition();
  const [ language, setLanguage ] = useState(i18next.language);

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
          <div className='fixed top-[25px] right-[123px] flex items-center z-10'>
            <LanguageSelect onLanguageChange={setLanguage}/>
          </div>
        <AppRoutes/>      
      </I18nextProvider>
    </BrowserRouter>
  )
}

export default App
