import { useContext } from 'react';
import { Shop } from '../../Context/ShopContext';
import './styles.css';
import {Link} from 'react-router-dom';
import ordenGenerada from '../../Utils/generarOrden';
import guardarOrden from '../../Utils/guardarOrden';
import comprasRealizadas from '../../Utils/comprasRealizadas';

const Cart = () => {

  const {cart, removeItem, clearAll, totalPrice, user, password, userId, setNewPurchase, newPurchase, orden} = useContext(Shop);  

  const confirmarOrden = () =>{
    comprasRealizadas(userId, setNewPurchase);
    const orden = ordenGenerada(cart, totalPrice, newPurchase);
    guardarOrden(cart, orden, user, password, userId, setNewPurchase);
  }

  const chequeo=()=>{
    comprasRealizadas(userId, setNewPurchase);
  }

  //tengo q hacer un array con las compras para ver cuantos elementos tiene con un for of, y obteniendo un valor por i, y ese valor lo uso para darle el numero de compra de forma dinamica.

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
    <div className='backHome' onClick={chequeo}>CUANTAS COMPRAS HAY</div>
    </>

  )
}

export default Cart