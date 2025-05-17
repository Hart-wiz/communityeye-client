import React from 'react'
import Hero from '../components/Hero/Hero'
import MapPreview from "../components/MapPreview";
import Highlights from '../components/Highlights';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
        <Hero/>
        <Highlights/>
        <MapPreview/>
        <Footer/>
      
    </div>
  )
}

export default Homepage
