import React from "react";
import './styles.css';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Shop } from "../../../Context/ShopContext";

const CartWidget = (props) => {

    const { cart } = useContext(Shop);


    return (
        <Link onClick={()=>props.closeToggle(false)} className={window.screen.width < 991 ? "navItem naranja" : "navItem"} to="proyecto-react/cart">
            <div className="cartWidContain">
                <MdShoppingCart className="cart" />
                {cart.length > 0 ?
                    <div className="cartQty">{cart.length}</div> :
                    null}
            </div>
        </Link>

    )
}

export default CartWidget;