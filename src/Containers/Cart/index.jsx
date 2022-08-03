import { useContext } from 'react';
import { Shop } from '../../Context/ShopContext';
import './styles.css';
import {Link} from 'react-router-dom';
import ordenGenerada from '../../Utils/generarOrden';
import guardarOrden from '../../Utils/guardarOrden';
import comprasRealizadas from '../../Utils/comprasRealizadas';

const Cart = () => {

  const {cart, removeItem, clearAll, totalPrice, user, password, userId, setNewPurchase, newPurchase, setModalCompra, login} = useContext(Shop);  

  const confirmarOrden = () =>{
    comprasRealizadas(userId, setNewPurchase);
    const orden = ordenGenerada(cart, totalPrice, newPurchase);
    guardarOrden(cart, orden, user, password, userId, setNewPurchase);
    
    login === true?
    setTimeout(setModalCompra(true), 1500):
    console.log("inicie sesión para realizar una compra");
  }

  return (
    cart.length > 0 ?
    <ul className='cartContainer'>
      {cart.map(producto => {

        return <li className='cartItem' key={producto.id}><img className='cartImage' src={producto.image} width='80px' alt={producto.title}/> 
                  <div className='cartSubContainer'>
                      <p className='cartTitle'>{producto.title}</p> 
                      <p className='cartTitle'>price: ${producto.price}</p>
                      <p className='cartTitle'>qty: {producto.quantity}</p>
                      <p className='cartTitle'>total: ${producto.quantity*producto.price}</p>
                  </div>
                  <button className='eraseItem' onClick={()=>removeItem(producto.id)}>X</button>
                </li>
   
      })}
      <li className='cartItem total'>
        <div className="finishContainer">
          <p className='totalPrice'>compra total: ${totalPrice} </p>
          <button className='purchaseBtn' onClick={()=> confirmarOrden()}>TERMINAR MI COMPRA</button>
        </div>
      </li>

      <>
        <button className='eraseAllItems' onClick={()=> clearAll()}>BORRAR TODO</button>
      </>
      
    </ul>:
    <>
    <p className='noCart'>NO HAY ELEMENTOS EN EL CARRITO</p>
    <button className='backHome'><Link to='/'>VOLVER AL INICIO</Link></button>
    </>

  )
}

export default Cart