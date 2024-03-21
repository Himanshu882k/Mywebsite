import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import AboutContent from '../components/AboutContent';  
const About = () => {
  return (
    <div><Navbar />
    <HeroImage2 heading="ABOUT." text="Hello!! I am a Data science enthusiast"/>
    <AboutContent />
    <Footer /></div>
  )
}

export default About