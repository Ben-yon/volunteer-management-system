import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes/AppRoute';
//import { styles } from './styles';

function App() {

  return (
    <BrowserRouter>
        <AppRoutes/>      
    </BrowserRouter>
  )
}

export default App
