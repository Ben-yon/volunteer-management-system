import { BrowserRouter } from 'react-router-dom';

import { UserRegistration } from './components/userRegistration';

//import { styles } from './styles';

function App() {

  return (
    <BrowserRouter>
    <div className="relative bg-hero bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[49rem]">
      <div className="red-gradient bg-no-repeat bg-cover w-[100%] h-[49rem]">
        <UserRegistration/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
