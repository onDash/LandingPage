import "./Navbar.css"
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="lg:px-16 px-6 bg-blue1 shadow-md flex flex-wrap items-center lg:py-0 py-2">
      
    {/* LOGO */}
    <div className="flex-1 flex justify-between items-center">
      <a href="/" className="flex text-lg font-semibold">
      <img src={Logo} className="logo react" alt="React logo" />
      </a>
    </div>

    <label for="menu-toggle" className="cursor-pointer lg:hidden block">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        class="lucide lucide-menu"
      >
        
        <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
      </svg>
    </label>

    <input className="hidden" type="checkbox" id="menu-toggle" />
    <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>

        <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
          <li className="py-2 lg:py-0 ">
            <a
              className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
              href="#"
            >
              Blog
            </a>
          </li>
          <li className="py-2 lg:py-0 ">
            <a
              className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
              href="#"
            >
              Projects
            </a>
          </li>
          <li className="py-2 lg:py-0 ">
            <a
              className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400"
              href="#"
            >
              Apps
            </a>
          </li>
        </ul>

      </nav>
    </div>
  </nav>
  )
}

export default Navbar