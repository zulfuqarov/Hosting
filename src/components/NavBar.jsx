import React, { useState } from 'react'
import NavLogo from '../assets/img/NavLogo.svg'
import { Link } from 'react-router-dom'
const NavBar = () => {
  const [showBars, setshowBars] = useState(false)
  const handleBarsClick = () => {
    setshowBars(!showBars)
  }
  return (
    <div className="bg-gradient-to-r px-[15px] from-[#2A77F7] to-[#1243AA] w-full h-full">
      <div className="mx-auto container py-[40px]">
        <div className="flex justify-between items-center">
          <Link className='' to="/">
            <div>
              <img src={NavLogo} alt="Logo" />
            </div>
          </Link>
          <div className="hidden md:flex w-[586px] justify-between text-white font-semibold">
            <div className='relative group p-[15px] '>
              <Link to="/">Hosting</Link>
              <div className="bg-white rounded absolute mt-[20px] px-[30px]  group-hover:h-[90px] flex flex-col  justify-evenly h-[0px] w-[350px] overflow-hidden items-start  transform translate-x-[-40%] transition-all">
                <div className="text-center ">
                  <Link className='text-[#1243AA] hover:text-[#EF7F3C] transition-all font-semibold '>
                    Pulsuz Hosting
                    <i className="fa-solid fa-server pl-[20px]"></i>
                  </Link>
                </div>
                <div className="text-center">
                  <Link className='text-[#1243AA] hover:text-[#EF7F3C] transition-all font-semibold '>
                    Premium Hosting
                    <i className="fa-solid fa-server pl-[20px]"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group p-[15px] ">
              <Link >Domen</Link>
              <div className="bg-white rounded absolute mt-[20px] px-[30px]  group-hover:h-[90px] flex flex-col  justify-evenly h-[0px] w-[350px] overflow-hidden items-start  transform translate-x-[-40%] transition-all">
                <div className="text-center ">
                  <Link to='/Pulsuz-Domen' className='text-[#1243AA] hover:text-[#EF7F3C] transition-all font-semibold '>
                    Pulsuz Domen
                    <i className="fa-solid fa-dollar-sign  pl-[20px]"></i>
                  </Link>
                </div>
                <div className="text-center">
                  <Link className='text-[#1243AA] hover:text-[#EF7F3C] transition-all font-semibold '>
                    Premium Domen
                    <i className="fa-solid fa-gift pl-[20px]"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className='p-[15px] flex justify-center items-center'>
              <Link>Dəstək</Link>
            </div>
            <div className='p-[15px] flex justify-center items-center'>
              <Link>Şəriklər</Link>
            </div>
            <div className='p-[15px] flex justify-center items-center'>
              <Link>Partnyorluq</Link>
            </div>
            <div className='p-[15px] flex justify-center items-center'>
              <Link
                to="/Login"
              >
                <i className="fa-solid fa-right-from-bracket text-white font-semibold"></i>
              </Link>
            </div>
          </div>
          <div className="md:hidden ">
            <button onClick={handleBarsClick} className="text-white text-[26px] font-semibold">☰</button>
          </div>
        </div>
        {
          showBars &&
          <div className="md:hidden mt-4">
            <div className="flex flex-col items-center font-semibold">
              <Link to="/" className="text-white py-2">Hosting</Link>
              <Link to="/Pulsuz-Domen" className="text-white py-2">Domen</Link>
              <Link className="text-white py-2">Dəstək</Link>
              <Link className="text-white py-2">Şəriklər</Link>
              <Link className="text-white py-2">Partnyorluq</Link>
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default NavBar