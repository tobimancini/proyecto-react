import { useContext } from 'react';
import { Shop } from '../../Context/ShopContext';
import './styles.css';
import { Link } from 'react-router-dom';
import ordenGenerada from '../../Utils/generarOrden';
import guardarOrden from '../../Utils/guardarOrden';
import comprasRealizadas from '../../Utils/comprasRealizadas';



const Cart = () => {

  const { cart, removeItem, clearAll, totalPrice, user, password, userId, setNewPurchase, newPurchase, setModalCompra, modalPurch, setGetPurch } = useContext(Shop);

  const confirmarOrden = async () => {
    comprasRealizadas(userId, setNewPurchase, modalPurch, setGetPurch);
    const orden = ordenGenerada(cart, totalPrice, newPurchase);
    guardarOrden(cart, orden, user, password, userId, setNewPurchase, setModalCompra, modalPurch, setGetPurch);
  }

  return (
    cart.length > 0 
    ?
      <div className='cartContainer'>
        <div className='titles'>
          <div className='titleProduct'>producto</div>
          <div className='title'>cantidad</div>
          <div className='title'>precio unitario</div>
          <div className='title'>precio total</div>
        </div>
        <ul className='cartList'>
          {cart.map(producto => {

            return <li className='cartItem' key={producto.id}>
              <div className='product'>
                <img className='itemImg' src={producto.image} width='80px' alt={producto.title} />
                <p className='titleItem'>{producto.title}</p>
              </div>
              <p className='textItem'>{producto.quantity}</p>
              <p className='textItem'>${producto.price}</p>
              <p className='textItem'>${producto.quantity * producto.price}</p>
              <button className='eraseItem' onClick={() => removeItem(producto.id)}>X</button>
            </li>
          })}
          <p className='totalPrice'>total: ${totalPrice}</p>
          <div className='buttons'>
            <button className='purchaseBtn' onClick={() => confirmarOrden()}>buy</button>
            <button className='eraseAllItems' onClick={() => clearAll()}>empty cart</button>
          </div>
        </ul >
      </div>
      :
      <>
        <p className='noCart'>the cart is empty!</p>
        <Link to='/'><button className='backHome'>back home</button></Link>
      </>

  )
}

export default Cart