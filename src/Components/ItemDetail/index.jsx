import React, { useContext } from 'react'
import ItemCount from '../ItemCount';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './styles.css';
import { Shop } from '../../Context/ShopContext';

const ItemDetail = ({ product }) => {

    const navigate = useNavigate();

    const { addItem } = useContext(Shop);

    const handleConfirm = (qty) => {
        addItem(product, qty);
        navigate('../proyecto-react/cart');
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
                    <ItemCount onConfirm={handleConfirm} stock={product.stock} /> 
                </div>

            </div>
        </div>
    )
}

export default ItemDetail