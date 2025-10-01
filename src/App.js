import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import StickyContent from './components/StickyContent'
import Header from './components/Header'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import CardSection from './components/CardSection'
import AstrologerCarousel from './components/AstrologerCarousel'
import FormSection from './components/FormSection'
import HoroscopeSection from './components/HoroscopeSection'
import { initSiteScripts } from './assets/data/commonScript'

// Pages
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import SubscriptionPage from './Pages/Subscription'

import './App.css'

function HomeContent () {
  useEffect(() => {
    initSiteScripts()
  }, [])

  return (
    <div className='AppContent'>
      <Hero />
      <IntroSection />
      <CardSection />
      <AstrologerCarousel />
      <FormSection />
      <HoroscopeSection />
      <footer>
        <p>&copy; 2024 Nakshaveda. All rights reserved.</p>
      </footer>
    </div>
  )
}

function App () {
  return (
    <Router>
      {/* Header and StickyContent are always visible */}
      <Header />
      <StickyContent />

      <div className='page-content'>
        <Routes>
          <Route path='/' element={<HomeContent />} /> {/* Home Page */}
          <Route path='/about' element={<AboutUs />} /> {/* About Us Page */}
          <Route path='/contact' element={<ContactUs />} />{' '}
          {/* Contact Us Page */}
          <Route path='/subscription' element={<SubscriptionPage />} />{' '}
          {/* Subscription Page */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
