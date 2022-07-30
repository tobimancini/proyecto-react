import React from "react";
import CartWidget from "../CartWidget";
import './styles.css';
import {Link} from 'react-router-dom';
import UserWidget from "../UserWidget";

const Navbar = () => {

    return (
        <div className="navContainer">
            <ul className="navBar">
                <li className="navItemContainer"><Link className="navItem" to='/'>home</Link></li>
                <li className="navItemContainer"><Link className="navItem" to='/category/electronics'>electronics</Link></li>
                <li className="navItemContainer"><Link className="navItem" to='/category/jewelery'>jewelery</Link></li>
                <li className="navItemContainer"><Link className="navItem" to="/category/women's clothing">women's clothing</Link></li>
                <li className="navItemContainer"><Link className="navItem" to="/category/men's clothing">men's clothing</Link></li>
                <li className="navItemContainer cartWidget"><CartWidget/></li>
            </ul>
            <div className="navItemContainer"><UserWidget/></div>
        </div>
    )
}

export default Navbar;