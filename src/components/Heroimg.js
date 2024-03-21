import "./HeroimgStyles.css"
import React from 'react'
import Introimg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" 
             src={Introimg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I'm Himanshu.</p>
            <h1>Data Scientist</h1>
            <div>
                <Link to ="/project" className="btn">Projects</Link>
                <Link to ="/contact" className="btn btn-light">Contact</Link>
            </div>

        </div>
    </div>

    
  )
}

export default Heroimg