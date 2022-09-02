import React from "react";
import { BiUser } from 'react-icons/bi';
import { Shop } from "../../../Context/ShopContext";
import { useContext } from "react";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import './styles.css';

const UserWidget = () => {

    const [dropdown, setDropdown] = useState(false);
    const { logged } = useContext(Shop);


    return (
        <>
            <div className="navItem" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
                <BiUser className="userWidget" />
                <Dropdown items={logged} dropdown={dropdown} setDropdown={setDropdown} />
            </div>

        </>

    )
}

export default UserWidget;

{/* <div className="menu-items">
    <UserWidget />
</div>
{
    login === true ?
        <div className="loginText">
            <p id='userNameTop'>{user}</p>
        </div>
        :
        null
} */}

