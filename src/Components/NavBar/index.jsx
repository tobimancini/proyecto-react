import './styles.css';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Shop } from "../../Context/ShopContext";
import CartWidget from "./CartWidget";
import { menuItems } from "./NavItems";
import UserWidget from "./UserWidget";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';

const NavbarMe = () => {

    const { login, user } = useContext(Shop);    

    // const classAsign = (index) =>{
    //     if (index === 0) {
    //         return "navItem verde"
    //     }else if(index === 1){
    //         return "navItem amarillo"
    //     }else if(index === 2){
    //         return "navItem naranja"
    //     }else if(index === 3){
    //         return "navItem verde"
    //     }else if(index === 4){
    //         return "navItem amarillo"
    //     }
    // }

    

    const onToggleMode = (index)=>{
        if (window.screen.width < 992) {
            if (index === 0) {
                return "toggleVerde"
            }else if(index === 1){
                return "toggleAmarillo"
            }else if(index === 2){
                return "toggleNaranja"
            }else if(index === 3){
                return "toggleVerde"
            }else if(index === 4){
                return "toggleAmarillo"
            }
        }
    }

    const cartToggle = () =>{
        alert(window.screen.width)
        return window.screen.width < 992 ?'toggleNaranja' : ""
    }

    return (

        <header>
        {/* //     <div className="nav-area"> */}
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <div className='navBarLogo'>
                        <div className="logoImg"></div>
                        <div className="logoText"></div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        {/* <ul className="menus"> */}
                        {menuItems.map((menu, index) => {
                            return (
                                <Nav.Link as={'div'} key={index} className={onToggleMode(index)} >
                                    <Link className="navItem" to={menu.title === "home" ? 'proyecto-react/' : `proyecto-react/category/${menu.title}`}>{menu.title}</Link>
                                </Nav.Link>
                                // <li className="menu-items" key={index}>
                                // <Link to={menu.title === "home" ? 'proyecto-react/' : `proyecto-react/category/${menu.title}`}>{menu.title}</Link>
                                // </li>
                            );
                        })}
                        <Nav.Link as={'div'} className={cartToggle()}>
                            <CartWidget />
                        </Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                        {/* <li className="menu-items">
                                    <CartWidget />
                                </li> */}
                        {/* </ul> */}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {/* //         <div className="userContainer">
        //             <div className="menu-items">
        //                 <UserWidget />
        //             </div>
        //             {
        //                 login === true ?
        //                     <div className="loginText">
        //                         <p id='userNameTop'>{user}</p> */}
        {/* //                     </div>
        //                     :
        //                     null
        //             }
        //         </div> */}
        {/* //     </div> */}
        </header >

    )
}

export default NavbarMe;