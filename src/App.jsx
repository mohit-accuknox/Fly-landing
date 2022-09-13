import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeaderSection from './components/Header/HeaderSection'
import MapSection from './components/Map/MapSection'
import FeatureSection from './components/Feature/FeatureSection'
import ApplicationSection from './components/Application/ApplicationSection'
import TechnologySection from './components/Technology/TechnologySection'
import CompanySection from './components/Company/CompanySection'
import FooterSection from './components/Footer/FooterSection'

function App() {

  return (
    <div className="App">
      <HeaderSection/>
      <MapSection/>
      <FeatureSection/>
      <ApplicationSection/>
      <TechnologySection/>
      <CompanySection/>
      <FooterSection/>
    </div>
  )
}

export default App
