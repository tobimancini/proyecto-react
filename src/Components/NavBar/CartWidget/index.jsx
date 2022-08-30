import React from "react";
import './styles.css';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Shop } from "../../../Context/ShopContext";

const CartWidget = () => {

    const { cart } = useContext(Shop);


    return (
        <Link to="proyecto-react/cart">
            <MdShoppingCart className="cart" />
            {cart.length > 0 ?
                <div className="cartQty">{cart.length}</div> :
                null}
        </Link>



    )
}

export default CartWidget;