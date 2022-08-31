import './styles.css';
import { Link } from 'react-router-dom';


import { useContext } from "react";
import { Shop } from "../../Context/ShopContext";
import CartWidget from "./CartWidget";
import { menuItems } from "./NavItems";
import UserWidget from "./UserWidget";

const Navbar = () => {

    const { login, user } = useContext(Shop);

    return (

        <header>
            <div className="nav-area">
                <div className='navBarLogo'>
                    <div className="logoImg"></div>
                    <div className="logoText"></div>
                </div>
                <nav>

                    <ul className="menus">
                        {menuItems.map((menu, index) => {
                            return (
                                <li className="menu-items" key={index}>
                                    <Link to={menu.title === "home" ? 'proyecto-react/' : `proyecto-react/category/${menu.title}`}>{menu.title}</Link>
                                </li>
                            );
                        })}
                        <li className="menu-items">
                            <CartWidget />
                        </li>
                    </ul>


                </nav>
                <div className="userContainer">
                    <div className="menu-items">
                        <UserWidget />
                    </div>
                    {
                        login === true ?
                            <div className="loginText">
                                <p id='userNameTop'>{user}</p>
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        </header>

    )
}

export default Navbar;