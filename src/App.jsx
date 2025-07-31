import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

function App() {
  return(
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>

   </Router>
  )
}



export default App
