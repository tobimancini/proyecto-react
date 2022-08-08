import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shop } from '../../../Context/ShopContext';

const Dropdown = ({ items ,dropdown, setDropdown }) => {

    const { setModalLogin, login, setLogin, setLogOrSign } = useContext(Shop);

    // const onUserWidget = () => {
    //     setUserActive(true)
    // }

    // const offUserWidget = () => {
    //     setUserActive(false)
    // }

    const openLoginModal = (item) => {
        setModalLogin(true);
        setDropdown(false);

        item === "log in"? setLogOrSign("login") : setLogOrSign("sign")
    }

    const logOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("pass")

        setLogin(false);
        setDropdown(false)
    }

   

    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`} >
            {items.map((item, index) => (

                login === true ?
                    <li key={index} className="menu-items" onClick={item.title === "log out" ? () => logOut() : ()=>setDropdown(false)} >
                        <Link to="/">{item.title}</Link>
                    </li>
                    :
                    <li key={index} className="menu-items" onClick={()=>openLoginModal(item.title)} >
                        <Link to="/">{item.title}</Link>
                    </li>                
            ))}
        </ul>
    );
};

export default Dropdown;