import React, { useContext } from 'react'
import ContextHome from './context/ContextHome'
import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'

const App = () => {
  const { pathname } = useLocation()
  const showNavFooter = ["/Login", "/Register"]


  return (
    <>
      <ContextHome>
        {!showNavFooter.includes(pathname) && <NavBar />}
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path='/' element={<Home />} />
        </Routes>
        {!showNavFooter.includes(pathname) && <Footer />}
      </ContextHome>
    </>
  )
}

export default App