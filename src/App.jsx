import React, { useContext } from 'react'
import ContextHome from './context/ContextHome'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <ContextHome>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ContextHome>
    </>
  )
}

export default App