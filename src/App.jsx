import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AboutProfessions from './components/AboutProfessions';
import ElseltComis from './components/ElseltComis';
import NotFound from './components/NotFound';
import Questions from './components/Questions';
import Elselt from './components/Elselt';
import BachDay from './components/BachDay';
import ScrollToTop from './components/ScrollToTop';
import Professions from './components/Professions';
// import Banner from './components/Banner';
function App() {
  return (
      <Router>
        <div className='App'>
          <ScrollToTop></ScrollToTop>
          <Header />
          <div className='bg-[#fcfdff]'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/majorview/:programmId" element={<AboutProfessions />} />
              <Route path='/workers' element={<ElseltComis/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path='/question' element={<Questions/>}/>
              <Route path='/signin' element={<Elselt/>}/>
              <Route path="/professions/:schoolId" element={<Professions/>}/>
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
  )
}

export default App
