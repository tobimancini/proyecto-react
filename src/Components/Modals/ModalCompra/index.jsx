import React, { useContext } from 'react';
import { Shop } from '../../../Context/ShopContext';
import ordenGenerada from '../../../Utils/generarOrden';
import './styles.css';

const ModalCompra = () => {

    const { cart, totalPrice, newPurchase } = useContext(Shop);

    const order = ordenGenerada(cart, totalPrice, newPurchase);
    const purchase = order.compras;
    const items = purchase[`${newPurchase}`].items



    return (
        <div className='orderContainer'>
            <div className='titles'>
                <div className='titleProduct'>producto</div>
                <div className='title'>cantidad</div>
                <div className='title'>precio unitario</div>
                <div className='title'>precio total</div>
            </div>
            <div className='order'>
                {items.map(el => {
                    return <div key={el.id} className='itemContainer'>
                        <div className='product'>
                        <img className='itemImg' src={el.image} alt="" />
                        <p className='titleItem'>{el.title}</p>
                        </div>
                        <p className='textItem priceFont'>{el.quantity}</p>
                        <p className='textItem priceFont'>${el.price}</p>
                        <p className='textItem priceFont'>${el.quantity*el.price}</p>
                    </div>
                })}
            </div>
            <div className='textItem priceFont'>total: ${purchase[`${newPurchase}`].total} </div>
        </div>

    )
}

export default ModalCompra