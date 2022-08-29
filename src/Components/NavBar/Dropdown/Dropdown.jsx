import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Shop } from '../../../Context/ShopContext';

const Dropdown = ({ items ,dropdown, setDropdown }) => {

    const { setModalLogin, login, setLogin, setLogOrSign, setModalPurch } = useContext(Shop);

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

    const openModalPurchases = () => {
        setModalPurch(true);
        setDropdown(false);
    }

   

    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`} >
            {items.map((item, index) => (

                login === true ?
                    <li key={index} className="menu-items" onClick={item.title === "log out" ? () => logOut() : ()=>openModalPurchases()} >
                        <Link to='proyecto-react/' >{item.title}</Link>
                    </li>
                    :
                    <li key={index} className="menu-items" onClick={()=>openLoginModal(item.title)} >
                        <Link to='proyecto-react/'>{item.title}</Link>
                    </li>                
            ))}
        </ul>
    );
};

export default Dropdown;