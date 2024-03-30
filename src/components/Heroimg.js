import "./HeroimgStyles.css"
import React from 'react'
import Introimg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        {/* <img className="intro-img"
          src={Introimg} alt="IntroImg" /> */}
      </div>
      <div className="content">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..700;1,100..700&family=Lora:ital,wght@0,200..500;1,200..500&display=swap');
        </style>
        <h2 style={{ fontFamily: 'Advent Pro, sans-serif' }}>HI, I'm Himanshu.</h2>
        <h1 style={{ fontFamily: 'Lora, sans-serif' }}>Data Science Enthusiast.</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>


  )
}

export default Heroimg