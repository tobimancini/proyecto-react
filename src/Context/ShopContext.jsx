import React, { createContext, useState } from 'react'
import { useEffect } from 'react';
import comprasRealizadas from '../Utils/comprasRealizadas';
import ordenGenerada from '../Utils/generarOrden';
import guardarOrden from '../Utils/guardarOrden';

export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [estadoA, setEstadoA] = useState('valor predeterminado');

    const [cart, setCart] = useState([]);

    const[modalOn, setModalOn] = useState(false);

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
        setCart([]);
        setTimeout(() => {
            window.location.href = "/"
        }, 2500);
        
    }
    const orderFinalPrice = (cart, priceEnd) =>{
        cart.forEach(element => {
            priceEnd += (element.price * element.quantity);
            return(priceEnd)
          });      
    }

    const totalPrice = cart.reduce((previousValue, currentValue) => previousValue + Number(currentValue.price*currentValue.quantity), 0 );

    return (
        <Shop.Provider value={{estadoA, setEstadoA, addItem, cart, removeItem, clearAll, totalPrice, makePurchase, orderFinalPrice, modalOn, setModalOn, setUser,setPassword, setLogin, user, password, login, userId, setUserId, newPurchase, setNewPurchase, orden}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider