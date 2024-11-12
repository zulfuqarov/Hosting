import React, { useContext } from 'react'
import ContextHome from './context/ContextHome'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <ContextHome>
        <NavBar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </ContextHome>
    </>
  )
}

export default App