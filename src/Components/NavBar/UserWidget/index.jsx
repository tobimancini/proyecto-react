import React from "react";
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Shop } from "../../../Context/ShopContext";
import { useContext } from "react";
import { useState } from "react";
import { profileData } from "../NavItems/profileData";
import { loginOrSignin } from "../NavItems/logOrSign";
import Dropdown from "../Dropdown/Dropdown";

const UserWidget = () => {

    // const {setModalLogin, user, login} = useContext(Shop);
    // const [userActive, setUserActive] = useState(false)

    // const onUserWidget = () =>{
    //     setUserActive(true)
    // }

    // const offUserWidget = () =>{
    //     setUserActive(false)
    // }

    // const openLoginModal = () => {
    //     setModalLogin(true);
    // }

    const [dropdown, setDropdown] = useState(false);
    const { user, login, logged } = useContext(Shop);


    return (
        <>
            <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
                <BiUserCircle className="userWidget" />
            </button>

            <Dropdown items={logged} dropdown={dropdown} setDropdown={setDropdown} />
        </>

        // login===true?
        // <div className="uWidgetContainer" onClick={openLoginModal}>
        //     <BiUserCircle className="userWidget"/>
        //     <div className="loginText">
        //         <p>{user}</p> 
        //     </div>
        // </div>
        // :
        // userActive === false?
        // <div className="uWidgetContainer" onClick={openLoginModal} onMouseLeave={offUserWidget} onMouseEnter={onUserWidget}><BiUserCircle className="userWidget"/></div>
        // :
        // <div className="uWidgetContainer logOrSign" onClick={openLoginModal} onMouseLeave={offUserWidget} onMouseEnter={onUserWidget}><BiUserCircle className="userWidget"/>
        //     <div className="loginText">
        //         <p>log in<br/>or<br/>sign in</p>
        //     </div>
        // </div>
    )
}

export default UserWidget;
