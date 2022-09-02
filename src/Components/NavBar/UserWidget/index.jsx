import React from "react";
import { FaUser } from 'react-icons/fa';
import { Shop } from "../../../Context/ShopContext";
import { useContext } from "react";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import './styles.css';

const UserWidget = (login, user) => {

    const [dropdown, setDropdown] = useState(false);
    const { logged } = useContext(Shop);


    return (
        <>
            <div className="navItem" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
                <FaUser className="userWidget" />
                <Dropdown items={logged} dropdown={dropdown} setDropdown={setDropdown}  />
            </div>

            {
                login === true ?
                    <div className="loginText">
                        <p id='userNameTop'>{user}</p>
                    </div>
                    :
                    null
            }


        </>

    )
}

export default UserWidget;
