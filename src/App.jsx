import React from 'react'
import './App.css'
import Header from './Components/Head/Header'
import Home from './Components/Hero/Home'
import Features from './Components/Feature/Features'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Resume from './Components/Resume/Resume'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter >
    <Header />
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='features' element={ <Features /> }/>
      <Route path='resume' element={ <Resume /> }/>
      <Route path='contact' element={ <Contact /> }/>
      <Route path='footer' element={ <Footer /> }/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App