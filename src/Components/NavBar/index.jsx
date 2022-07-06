import React from "react";
import CartWidget from "../CartWidget";
import './styles.css';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <ul>
            <li><Link className="active" to='/'>home</Link></li>
            <li><Link to='/category/electronics'>electronics</Link></li>
            <li><Link to='/category/jewelery'>jewelery</Link></li>
            <li><Link to="/category/women's clothing">women's clothing</Link></li>
            <li><Link to="/category/men's clothing">men's clothing</Link></li>
            <li><CartWidget/></li>
        </ul>
    )
}

export default Navbar;