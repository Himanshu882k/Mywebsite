import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
    <HeroImage2 heading="CONTACT." text="Hii!! Lets have a chat"/>
    <Form/>
    <Footer /></div>
  )
}

export default Contact