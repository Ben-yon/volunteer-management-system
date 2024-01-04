import { BrowserRouter } from 'react-router-dom';

import { UserRegistration } from './components/userRegistration';

function App() {

  return (
    <BrowserRouter>
      <div className='bg-hero bg-no-repeat bg-cover bg-center'>
        <UserRegistration/>
      </div>
    </BrowserRouter>
  )
}

export default App
