import React from "react";
import './styles.css';

const Navbar = () => {
    return (
        <ul>
            <li><a className="active" href="#home">home</a></li>
            <li><a href="#news">news</a></li>
            <li><a href="#contact">contact</a></li>
            <li><a href="#about">about</a></li>
        </ul>
    )
}

export default Navbar;