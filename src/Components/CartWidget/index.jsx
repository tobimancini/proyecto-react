import React from "react";
import './styles.css';
import { FiShoppingCart } from 'react-icons/fi';
import {useNavigate} from 'react-router-dom';

const CartWidget = () => {
    
    return (
        <div className="cartContainer"><FiShoppingCart className="cart"/></div>
    )
}

export default CartWidget;