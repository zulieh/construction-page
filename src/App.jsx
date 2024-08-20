import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Landing from './Components/Landing'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";
import Projects from './Components/Pages/Projects';

function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
        <Route path="/landing" element={<Landing />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
       {/* <Landing /> */}
    </Router>
  )
}

export default App
