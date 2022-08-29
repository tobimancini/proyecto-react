import React, { useContext } from 'react'
import ItemCount from '../ItemCount';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './styles.css';
import { Shop } from '../../Context/ShopContext';

const ItemDetail = ({ product }) => {

    const navigate = useNavigate();

    const [cartQty, setCartQty] = useState(0);

    const { addItem } = useContext(Shop);

    const handleConfirm = (qty) => {
        setCartQty(qty);
    }

    const handleTerminate = () => {
        addItem(product, cartQty);
        navigate('proyecto-react/cart');
    }


    return (
        <div className='itemDetailContainer'>
            <div className='productDetails'>
                <div className='imageContainer'>
                    <img className='productImage' src={product.image} />
                </div>


                <div className='details'>
                    <h1 className='productTitle'>{product.title}</h1>
                    <p className='productDescription'>Description:<br /><br />{product.description}</p>
                    <p className='productPrice'>$ {product.price}</p>
                    {!cartQty ?
                        <ItemCount onConfirm={handleConfirm} initial={1} stock={product.stock} /> :
                        <button className='buttonTerminate' onClick={handleTerminate}>Terminar Compra</button>
                    }
                </div>

            </div>
        </div>
    )
}

export default ItemDetail