import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Counter from './pages/Counter'
import Post from './pages/Post'
import Tudos from './pages/Tudos'

function App() {
  return(
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/tudos' element={<Tudos/>}/>
      

    </Routes>

   </Router>
  )
}



export default App
