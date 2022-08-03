import React, { useContext} from 'react';
import { Shop } from '../../../Context/ShopContext';
import ordenGenerada from '../../../Utils/generarOrden';
import './styles.css';

const ModalCompra = () => {

    const {cart, totalPrice, newPurchase} = useContext(Shop);

    const order = ordenGenerada(cart, totalPrice, newPurchase);
    const purchase = order.compras;
    const items = purchase[`${newPurchase}`].items


    return (
        <div>
        {items.map(el => {
            return  <div>
                        <p>{el.title}</p>
                        <p>{el.price}</p>
                        <p>{el.quantity}</p>
                    </div>
        })}
        <div>total: ${purchase[`${newPurchase}`].total} </div>
        </div>
    )
}

export default ModalCompra