import Logo from './assets/Logo.svg'
import './App.css'

import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>

      <div className='App'>
            <Navbar/>
            <div className='container'>
              <Outlet/>
            </div>
      </div>


        {/* <a href="https://react.dev" target="_blank">
          <img src={Logo} className="logo react" alt="React logo" />
        </a> */}

    </>
  )
}

export default App
