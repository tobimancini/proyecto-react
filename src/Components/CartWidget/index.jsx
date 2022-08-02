import React from "react";
import './styles.css';
import { FiShoppingCart } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import { Shop } from "../../Context/ShopContext";
import { useContext } from "react";
import comprasRealizadas from "../../Utils/comprasRealizadas";

const CartWidget = () => {

    const {cart} = useContext(Shop);

    // const chequeo=()=>{
    //     comprasRealizadas(userId, setNewPurchase);
    //   }
    
    
    return (
        <div className="widgetContainer"><Link to="/cart"><FiShoppingCart className="cart"/></Link>
            {cart.length>0?
            <div className="cartQty">{cart.length}</div>:
            null}
        </div>
        
    )
}

export default CartWidget;