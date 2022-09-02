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
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarMe = () => {

    const { login, user } = useContext(Shop);

    const onToggleMode = (index) => {
        if (window.screen.width < 992) {
            if (index === 0) {
                return "toggleVerde"
            } else if (index === 1) {
                return "toggleAmarillo"
            } else if (index === 2) {
                return "toggleNaranja"
            } else if (index === 3) {
                return "toggleVerde"
            } else if (index === 4) {
                return "toggleAmarillo"
            }
        } else {
            return "noToggle"
        }
    }

    const cartToggle = () => {
        alert(window.screen.width)
        return window.screen.width < 992 ? 'navItem toggleNaranja' : "navItem noToggle"
    }

    const closeToggle = () => {
        let btnToggler = document.querySelector('.navbar-toggler');
        let navbarToggle = document.getElementById('navbar-collapse');

        btnToggler.classList.add('collapsed');
        navbarToggle.classList.remove('show');
    }

    return (

        <header>
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
                            {menuItems.map((menu, index) => {
                                return (
                                    <Nav.Link as={'div'} key={index} className={onToggleMode(index)} onClick={() => closeToggle()} >
                                        <Link to={menu.title === "home" ? 'proyecto-react/' : `proyecto-react/category/${menu.title}`} className="navItem" >{menu.title}</Link>
                                    </Nav.Link>
                                );
                            })}
                            <Nav.Link as={'div'} className={cartToggle()}>
                                <CartWidget />
                            </Nav.Link>
                            <Nav.Link as={'div'} className={cartToggle()}>
                                <UserWidget />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >

    )
}

export default NavbarMe;