import React from "react";
import CartWidget from "../CartWidget";
import './styles.css';

const Navbar = () => {
    let cartQty="+1"

    return (
        <ul>
            <li><a className="active" href="#home">home</a></li>
            <li><a href="#news">news</a></li>
            <li><a href="#contact">contact</a></li>
            <li><a href="#about">about</a></li>
            <li><CartWidget/><p className="count">{cartQty}</p></li>
        </ul>
    )
}

export default Navbar;