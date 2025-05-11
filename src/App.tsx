import './App.css'
import { useState } from "react"; 
import logo from "./assets/logo.svg"
import hamburger from "./assets/icon-hamburger.svg"
import close from "./assets/icon-close.svg"
import Hero from './components/Hero.tsx';
import Reasons from './components/Reasons.tsx';
import Articles from './components/Articles.tsx';
import Footer from './components/Footer.tsx';
import Button from './components/Button.tsx';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false); 

  const mobileMenuHandler = () => {
    setIsMobileMenuOpen(prev => {
      return !prev
    })
  }

  return (
    <>
      <header className='py-[1.5rem] flex justify-center relative z-8 bg-white items-center md:py-0'>
        <div className='flex justify-between items-center w-[87.2%] max-w-[1110px]'>
          <img src={logo} alt="Logo image"/>
          <nav className={`bg-white absolute top-[125%] left-[50%] -translate-x-1/2 px-[2rem] py-[1.5rem] w-[87.2%] transition-all ${isMobileMenuOpen ? "" : "menu-hidden"} z-5 rounded-sm md:static md:translate-x-0 md:w-auto md:p-0`}>
            <ul className='flex flex-col gap-[1.5rem] items-center list-none md:flex-row'>
              <li><a className={`text-[#9597a5] hover:text-[#2d314d] cursor-pointer box-border border-b-[3px] border-transparent md:py-[1.5rem] md:block md:hover:border-b-[3px] md:hover:border-[#30c88f] md:hover:border-solid`}>Home</a></li>
              <li><a className={`text-[#9597a5] hover:text-[#2d314d] cursor-pointer box-border border-b-[3px] border-transparent md:py-[1.5rem] md:block md:hover:border-b-[3px] md:hover:border-[#30c88f] md:hover:border-solid`}>About</a></li>
              <li><a className={`text-[#9597a5] hover:text-[#2d314d] cursor-pointer box-border border-b-[3px] border-transparent md:py-[1.5rem] md:block md:hover:border-b-[3px] md:hover:border-[#30c88f] md:hover:border-solid`}>Contact</a></li>
              <li><a className={`text-[#9597a5] hover:text-[#2d314d] cursor-pointer box-border border-b-[3px] border-transparent md:py-[1.5rem] md:block md:hover:border-b-[3px] md:hover:border-[#30c88f] md:hover:border-solid`}>Blog</a></li>
              <li><a className={`text-[#9597a5] hover:text-[#2d314d] cursor-pointer box-border border-b-[3px] border-transparent md:py-[1.5rem] md:block md:hover:border-b-[3px] md:hover:border-[#30c88f] md:hover:border-solid`}>Careers</a></li>
            </ul>
          </nav>
          <div className={`hidden md:block`}>
            <Button/>
          </div>
          <button className={`cursor-pointer md:hidden`} onClick={mobileMenuHandler}>
            {isMobileMenuOpen ? <img src={close} alt="Click to close mobile menu"/> : <img src={hamburger} alt="Click to show mobile menu"/> }
          </button>
        </div>
      </header>
      {isMobileMenuOpen && <div className='backdrop'></div>}
      <Hero/>
      <Reasons/>
      <Articles/>
      <Footer/>
    </>
  )
}

export default App
