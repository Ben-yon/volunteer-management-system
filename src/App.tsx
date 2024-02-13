import { BrowserRouter } from 'react-router-dom';
import 'react-image-crop/dist/ReactCrop.css';

import { AppRoutes } from './routes/AppRoute';
import { LanguageProvider } from './components/LanguageProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import { ErrorBoundary } from './components/ErrorBoundary';


function App() {

  return (
    <LanguageProvider>
      <I18nextProvider i18n={i18n}>   
        <BrowserRouter>
          <ErrorBoundary>
              <AppRoutes/>
          </ErrorBoundary>
        </BrowserRouter>
      </I18nextProvider>
    </LanguageProvider>
  )
}

export default App
