import React from 'react'
import Home from './Components/Home/Home'
import {  Routes , BrowserRouter, Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
