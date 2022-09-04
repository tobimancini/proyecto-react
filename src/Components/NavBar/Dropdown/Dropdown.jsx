import React, { useContext, useState } from 'react';
import { Shop } from '../../../Context/ShopContext';
import './styles.css'

const Dropdown = ({ items, dropdown, setDropdown, setExpanded, expanded }) => {

    const { setModalLogin, login, setLogin, setLogOrSign, setModalPurch } = useContext(Shop);


    // const hola = () => {
    //     let btnToggler = document.querySelector('.navbar-toggler');
    //     let navbarToggle = document.getElementById('basic-navbar-nav');

    //     console.log(btnToggler, navbarToggle);

    //     btnToggler.classList.add('collapsed');
    //     navbarToggle.classList.remove('show');
    // }

    const openLoginModal = (item) => {
        item === "log in" ? setLogOrSign("login") : setLogOrSign("sign");

        // setDropdown((prev) => !prev)
        setModalLogin(true);
        let ulDropdown = document.querySelector('.dropdownMe');
        ulDropdown.classList.replace("show", "notShow");
        setExpanded(false);

    }

    const logOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("pass");
        let ulDropdown = document.querySelector('.dropdownMe');
        ulDropdown.classList.replace("show", "notShow");


        setLogin(false);
        setExpanded(false);
    }

    const openModalPurchases = () => {
        // // setDropdown((prev) => !prev)
        setModalPurch(true);
        let ulDropdown = document.querySelector('.dropdownMe');
        ulDropdown.classList.replace("show", "notShow");
        setExpanded(false);
    }



    return (
        <ul className={`dropdownMe ${dropdown ? "show" : "notShow"}`} >
            {items.map((item, index) => (

                login === true ?
                    <li key={index} className="dropdownList" >
                        <div onClick={item.title === "log out" ? () => logOut() : () => openModalPurchases()} className="dropdownItem"  >{item.title}</div>
                    </li>
                    :
                    <li key={index} className="dropdownList" >
                        <div onClick={() => openLoginModal(item.title)} className="dropdownItem">{item.title}</div>
                    </li>
            ))}
        </ul>
    );
};

export default Dropdown;