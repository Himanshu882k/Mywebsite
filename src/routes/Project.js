import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import Workcard from '../components/Workcard';


const Project = () => {
  return <div>
    <Navbar />
    <HeroImage2 heading="PROJECTS." text="Some of my recent works"/>
    <Workcard/>
    <Footer />
  </div>;
  
};

export default Project;