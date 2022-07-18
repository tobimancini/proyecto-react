import React, { useContext } from 'react'
import ItemCount from '../ItemCount';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import './styles.css';
import { Shop } from '../../Context/ShopContext';

const ItemDetail = ({product}) => {
    
    const navigate = useNavigate();
    
    // const handleAdd = (count) => {
    //     console.log(`Se agregaron ${count} items al carrito.`);
    // }

    const[cartQty , setCartQty]= useState(0);

    const {addItem} = useContext(Shop);

    const handleConfirm = (qty) =>{
        setCartQty(qty);
    }

    const handleTerminate = () =>{
        addItem(product, cartQty);
        navigate('/cart');
    }
    

    return (
        <div className='productDetails'>
            <div className='imageContainer'>
                <img className='productImage' src={product.image}/>
            </div>
            

            <div className='details'>
                <h1 className='productTitle'>{product.title}</h1>
                <p className='productDescription'>Description:<br/><br/>{product.description}</p>
                <p className='productPrice'>$ {product.price}</p>
                {!cartQty?
                <ItemCount onConfirm={handleConfirm} initial={1} stock={10}/>:
                <button className='buttonTerminate' onClick={handleTerminate}>Terminar Compra</button>
                }
            </div>

        </div>
    )
}

export default ItemDetail