import React from "react";
import CartWidget from "../CartWidget";
import './styles.css';

const Navbar = ({hola}) => {
    return (
        <ul>
            <li><a className="active" href="#home">home</a></li>
            <li><a href="#news">news</a></li>
            <li><a href="#contact">contact</a></li>
            <li><a href="#about">about</a></li>
            <CartWidget/>
        </ul>
    )
}

export default Navbar;