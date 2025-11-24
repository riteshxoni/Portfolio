import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Training from './components/Training'
// import Internship from './components/Internship'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Interest from './components/Interest'
// import Portfolio from './components/Portfolio'
import Testimonials  from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import './style.css'
const App = () => {
  return (
    <>
    <div className='container'>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Training></Training>
      <Experience></Experience>
      {/* <Internship></Internship> */}
      <Projects></Projects>
      <Interest></Interest>
      {/* <Portfolio></Portfolio> */}
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
    <Toaster />
    </>
    
  )
}

export default App