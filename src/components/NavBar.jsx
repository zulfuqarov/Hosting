import React, { useState } from 'react'
import NavLogo from '../assets/img/NavLogo.svg'
import { Link } from 'react-router-dom'
const NavBar = () => {
  const [showBars, setshowBars] = useState(false)
  const handleBarsClick = () => {
    setshowBars(!showBars)
  }
  return (
    <div className="bg-gradient-to-r from-[#2A77F7] to-[#1243AA] w-full h-full">
      <div className="mx-auto container py-[60px]">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div>
              <img src={NavLogo} alt="Logo" />
            </div>
          </Link>
          <div className="hidden md:flex w-[586px] justify-between text-white font-semibold">
            <Link to="/">Hosting</Link>
            <Link>Domain</Link>
            <Link>Dəstək</Link>
            <Link>Şəriklər</Link>
            <Link>Partnyorluq</Link>
            <Link
              to="/Login"
            >
              <i className="fa-solid fa-right-from-bracket text-white font-semibold"></i>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={handleBarsClick} className="text-white text-[26px] font-semibold">☰</button>
          </div>
        </div>
        {
          showBars &&
          <div className="md:hidden mt-4">
            <div className="flex flex-col items-center font-semibold">
              <Link to="/" className="text-white py-2">Hosting</Link>
              <Link className="text-white py-2">Domain</Link>
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