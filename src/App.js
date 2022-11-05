import React from 'react'
import Home from './Components/Home/Home'
import {  Routes , HashRouter, Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div className='App'>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  )
}

export default App
