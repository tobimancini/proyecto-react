import React, { createContext, useState } from 'react'
import Modal from '../Components/Modals/modal';
import comprasRealizadas from '../Utils/comprasRealizadas';

export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [estadoA, setEstadoA] = useState('valor predeterminado');

    const [cart, setCart] = useState([]);

    const[modalLogin, setModalLogin] = useState(false);
    const[modalCompra, setModalCompra] = useState(false);

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");

    const [login, setLogin] = useState(false);

    const[newPurchase, setNewPurchase] = useState(0);
    const[orden, setOrden] = useState({});


    const addItem = (producto, cantidad) =>{
        const productoRepetido = isInCart(producto)

        if (productoRepetido) {
            productoRepetido.quantity += cantidad;
            setCart([...cart]);
        }else{
            setCart([...cart, {...producto, quantity:cantidad}])
        }
    }

    const isInCart = (producto) =>{
        return cart.find(el => el.id === producto.id)
    }

    const removeItem = (id) => {
        const productosFiltrados = cart.filter(producto => producto.id !== id)
        setCart(productosFiltrados);
        comprasRealizadas(userId, setNewPurchase);
    }

    const clearAll = () =>{
        setCart([]);
        comprasRealizadas(userId, setNewPurchase);
    }

    const makePurchase = () =>{
            window.location.href = "/"
            setCart([]);
    }

    const orderFinalPrice = (cart, priceEnd) =>{
        cart.forEach(element => {
            priceEnd += (element.price * element.quantity);
            return(priceEnd)
          });      
    }

    const totalPrice = cart.reduce((previousValue, currentValue) => previousValue + Number(currentValue.price*currentValue.quantity), 0 );

    return (
        <Shop.Provider value={{estadoA, setEstadoA, addItem, cart, setCart, removeItem, clearAll, totalPrice, makePurchase, orderFinalPrice, modalLogin, setModalLogin, modalCompra, setModalCompra, setUser,setPassword, setLogin, user, password, login, userId, setUserId, newPurchase, setNewPurchase, orden}}>
            {
                modalLogin===true || modalCompra===true?
                <Modal/>:
                null
            }
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider