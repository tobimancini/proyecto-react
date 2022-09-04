import React from "react";
import { FaUser } from 'react-icons/fa';
import { Shop } from "../../../Context/ShopContext";
import { useContext } from "react";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import './styles.css';

const UserWidget = (props) => {

    const [dropdown, setDropdown] = useState(false);
    const { logged } = useContext(Shop);

    console.log(props);


    return (
        <div className="navItem loginContain" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
            <FaUser className="userWidget" />
            <Dropdown items={logged} dropdown={dropdown} setDropdown={setDropdown} setExpanded={props.setExpanded} expanded={props.expanded} />
            {
                props.login === true ?
                    <p id='userNameTop'>{props.user}</p>
                    :
                    null
            }
        </div>

    )
}

export default UserWidget;
