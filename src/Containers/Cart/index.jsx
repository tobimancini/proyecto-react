import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../Context/ShopContext';
import './styles.css';

const Cart = () => {

  const {cart, removeItem, clearAll} = useContext(Shop);

  return (
    cart.length > 0 ?
    <ul className='cartContainer'>
      {cart.map(producto => {
        return <li className='cartItem' key={producto.id}><img className='cartImage' src={producto.image} width='80px' alt={producto.title}/> 
                  <div className='cartSubContainer'>
                      <p className='cartTitle'>{producto.title}</p> 
                      <button onClick={()=>removeItem(producto.id)}>BORRAR</button>
                  </div>
                </li>
      })}
      <li>
        <button onClick={()=> clearAll()}>BORRAR TODO</button>
      </li>
      
    </ul>:
    <p className='noCart'>NO HAY ELEMENTOS EN EL CARRITO</p>

  )
}

export default Cart