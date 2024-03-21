import React from 'react';
import Navbar from '../components/navbar';
import Heroimg from '../components/Heroimg';
import Footer from '../components/Footer';
import Workcard from '../components/Workcard';
const Home = () => {
  return (
    <div>
      <Navbar/> 
      <Heroimg />
      <Workcard />
      <Footer />
    </div>
  )
}

export default Home;
