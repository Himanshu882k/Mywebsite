import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from 'react';
import "./NavbarStyles.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Licorice&display=swap');
            </style>
            <Link to="/">
            <h1 style={{ fontFamily: 'Dancing Script, cursive' }}>Portfolio.</h1>

            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <a href="https://ik.imagekit.io/himanshu/Himanshu.pdf?updatedAt=1710264972762" download>Download Resume</a>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? <FaTimes size={20} style={{ color: "#fff" }} />
                    : <FaBars size={20} style={{ color: "#fff" }} />}
            </div>
        </div>
    );
}

export default Navbar;
