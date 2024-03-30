import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import AboutContent from '../components/AboutContent';
const About = () => {
  return (
    <div>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Pompiere&display=swap')
      </style>
      <Navbar />
      <HeroImage2 style={{ fontFamily: 'Pompiere' }} heading="ABOUT." text="Hello!! I am Himanshu, 
    A young Data science enthusiast, 
    eager to learn and quick to adapt new things"/>
      <AboutContent />
      <Footer /></div>
  )
}

export default About