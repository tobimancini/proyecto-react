import React, { useContext } from 'react';
import { Shop } from '../../../Context/ShopContext';
import './styles.css'

const Dropdown = ({ items, dropdown, setDropdown }) => {

    const { setModalLogin, login, setLogin, setLogOrSign, setModalPurch } = useContext(Shop);

    const openLoginModal = (item) => {
        item === "log in"? setLogOrSign("login") : setLogOrSign("sign");
        
        setDropdown(false);
        setModalLogin(true);

    }

    const logOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("pass")
        
        setDropdown(false);
        setLogin(false);
    }

    const openModalPurchases = () => {
        setDropdown(false);
        setModalPurch(true);
    }

   

    return (
        <ul className={`dropdownMe ${dropdown ? "show" : "notShow"}`} >
            {items.map((item, index) => (

                login === true ?
                    <li key={index} className="dropdownList" >
                        <div onClick={item.title === "log out" ? () => logOut() : ()=>openModalPurchases()} className="dropdownItem"  >{item.title}</div>
                    </li>
                    :
                    <li key={index} className="dropdownList" >
                        <div onClick={()=>openLoginModal(item.title)} className="dropdownItem">{item.title}</div>
                    </li>                
            ))}
        </ul>
    );
};

export default Dropdown;