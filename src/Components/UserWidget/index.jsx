import React from "react";
import './styles.css';
import { BiUserCircle } from 'react-icons/bi';
import {Link} from 'react-router-dom';
import { Shop } from "../../Context/ShopContext";
import { useContext } from "react";
import { useState } from "react";

const UserWidget = () => {
    
    const {setModalLogin, user, login} = useContext(Shop);
    const [userActive, setUserActive] = useState(false)

    const onUserWidget = () =>{
        setUserActive(true)
    }

    const offUserWidget = () =>{
        setUserActive(false)
    }

    const openLoginModal = () => {
        setModalLogin(true);
    }
    
    return (
        login===true?
        <div className="uWidgetContainer" onClick={openLoginModal}>
            <BiUserCircle className="userWidget"/>
            <div className="loginText">
                <p>{user}</p> 
            </div>
        </div>
        :
        userActive === false?
        <div className="uWidgetContainer" onClick={openLoginModal} onMouseLeave={offUserWidget} onMouseEnter={onUserWidget}><BiUserCircle className="userWidget"/></div>
        :
        <div className="uWidgetContainer logOrSign" onClick={openLoginModal} onMouseLeave={offUserWidget} onMouseEnter={onUserWidget}><BiUserCircle className="userWidget"/>
            <div className="loginText">
                <p>log in<br/>or<br/>sign in</p>
            </div>
        </div>
    )
}

export default UserWidget;
