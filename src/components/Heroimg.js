import "./HeroimgStyles.css"
import React from 'react'

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
      </div>
      <div className="content">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..700;1,100..700&family=Lora:ital,wght@0,200..500;1,200..500&display=swap&https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
        </style>
        <h2 style={{ fontFamily: 'Advent Pro, sans-serif' }}>HI, I'm Himanshu.</h2>
        <h1 style={{ fontFamily: 'Lora, sans-serif' }}>Data Science Enthusiast.</h1>
        <text className="description" style={{ fontFamily: 'Kalam, cursive' }}>"Exploring patterns in data, one algorithm at a time."</text>
      </div>
    </div>


  )
}

export default Heroimg