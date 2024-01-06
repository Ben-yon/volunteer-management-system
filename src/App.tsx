import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes/AppRoute';
//import { styles } from './styles';

function App() {

  return (
    <BrowserRouter>
      <div className="red-gradient bg-no-repeat bg-cover w-[100%] h-[1117px]">
        <AppRoutes/>
      </div>
      
    </BrowserRouter>
  )
}

export default App
