import { useContext } from 'react';
import { Shop } from '../../Context/ShopContext';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import ordenGenerada from '../../Utils/generarOrden';
import guardarOrden from '../../Utils/guardarOrden';
import comprasRealizadas from '../../Utils/comprasRealizadas';



const Cart = () => {

  const { cart, removeItem, clearAll, totalPrice, user, password, userId, setNewPurchase, newPurchase, setModalCompra, modalPurch, setGetPurch, enqueueSnackbar } = useContext(Shop);

  const confirmarOrden = async () => {
    comprasRealizadas(userId, setNewPurchase, modalPurch, setGetPurch);
    const orden = ordenGenerada(cart, totalPrice, newPurchase);
    guardarOrden(cart, orden, user, password, userId, setNewPurchase, setModalCompra, modalPurch, setGetPurch, enqueueSnackbar);
  }

  const navigate = useNavigate();

  return (
    <div className='cartContainer'>
      {cart.length > 0
        ?
        <>
          <div className='titles'>
            <div className='titleProduct'>product</div>
            <div className='title'>quantity</div>
            <div className='title'>unit price</div>
            <div className='title'>total price</div>
          </div>
          <ul className='cartList'>
            {cart.map(producto => {

              return <li className='cartItem' key={producto.id}>
                <div className='product'>
                  <img className='cartImg' src={producto.image} width='80px' alt={producto.title} />
                  <p className='titleItem'>{producto.title}</p>
                </div>
                <p className='textItem priceFont'>{producto.quantity}</p>
                <p className='textItem priceFont'>${producto.price}</p>
                <p className='textItem priceFont'>${producto.quantity * producto.price}</p>
                <button className='eraseItem' onClick={() => removeItem(producto.id)}>X</button>
              </li>
            })}
            <p className='totalPrice priceFont'>total : ${totalPrice}</p>
            <div className='buttons'>
              <button className='purchaseBtn' onClick={() => confirmarOrden()}>Buy</button>
              <button className='eraseAllItems' onClick={() => clearAll()}>Empty Cart</button>
            </div>
          </ul >
        </>
        :
        <>
          <p className='noCart'>The cart is empty!</p>
          <button className='backHome' onClick={()=>navigate('../../proyecto-react/')}>Back Home</button>
        </>}
    </div>

  )
}

export default Cart