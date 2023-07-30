import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Features from './components/features/Features'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Features />
      <Services />
      <Contact />
    </>
  )
}

export default App
