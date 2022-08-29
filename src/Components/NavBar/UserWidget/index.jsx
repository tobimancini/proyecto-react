import React from "react";
import { BiUser} from 'react-icons/bi';
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
            <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
                <BiUser className="userWidget" />
            </button>

            <Dropdown items={logged} dropdown={dropdown} setDropdown={setDropdown} />
        </>

    )
}

export default UserWidget;
