import React from "react";
import './styles.css';
import { BiUserCircle } from 'react-icons/bi';
import {Link} from 'react-router-dom';
import { Shop } from "../../Context/ShopContext";
import { useContext } from "react";
import { useState } from "react";

const UserWidget = () => {
    
    const {setModalOn} = useContext(Shop);
    const [userActive, setUserActive] = useState(false)

    const onUserWidget = () =>{
        setUserActive(true)
    }

    const offUserWidget = () =>{
        setUserActive(false)
    }

    const openLoginModal = () => {
        setModalOn(true);
    }
    
    return (
        userActive === false?
        <div className="uWidgetContainer" onClick={openLoginModal} onMouseLeave={offUserWidget} onMouseEnter={onUserWidget}><BiUserCircle className="userWidget"/></div>:
        <div className="uWidgetContainer" onClick={openLoginModal} onMouseLeave={offUserWidget} onMouseEnter={onUserWidget}><BiUserCircle className="userWidget"/><div className="loginText">log in</div></div>
    )
}

export default UserWidget;
