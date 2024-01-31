import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes/AppRoute';
import { LanguageProvider } from './components/LanguageProvider';
//import { LanguageSelect } from './components/LanguageSelect';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';

//import { styles } from './styles';

function App() {

  return (
    <LanguageProvider>
      <I18nextProvider i18n={i18n}>   
        <BrowserRouter>
              <AppRoutes/>
        </BrowserRouter>
      </I18nextProvider>
    </LanguageProvider>
  )
}

export default App
