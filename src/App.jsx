import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Landing from './Components/Landing'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Navbar from './Components/Navbar'

function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
       {/* <Landing /> */}
    </Router>
  )
}

export default App
