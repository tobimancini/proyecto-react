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
        <div className='orderContainer'>
        {items.map(el => {
            return  <div key={el.id}>
                        <p>producto: {el.title}</p>
                        <p>precio unitario: ${el.price}</p>
                        <div className='orderImgBox'>
                            <img className='orderImg' src={el.image} alt="" />
                        </div>
                        <p>cantidad: {el.quantity}</p>
                    </div>
        })}
        <div>total: ${purchase[`${newPurchase}`].total} </div>
        </div>
    )
}

export default ModalCompra