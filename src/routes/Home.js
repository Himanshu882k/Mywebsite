import React from 'react';
import Navbar from '../components/navbar';
import Heroimg from '../components/Heroimg';
import Footer from '../components/Footer';
import Workcard from '../components/Workcard';
import Education from '../components/Education';
import Form from '../components/Form';
const Home = () => {
  return (
    <div>
      <Navbar/> 
      <Heroimg />
      <Workcard />
      <Education /> 
      <Form />
      <Footer />
    </div>
  )
}

export default Home;
