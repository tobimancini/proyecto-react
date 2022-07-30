import React, { createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [estadoA, setEstadoA] = useState('valor predeterminado');

    const [cart, setCart] = useState([]);

    const[finalNumber, setFinalNumber] = useState(0);

    const[modalOn, setModalOn] = useState(false);

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
    }

    const clearAll = () =>{
        setCart([]);
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
        <Shop.Provider value={{estadoA, setEstadoA, addItem, cart, removeItem, clearAll, totalPrice, makePurchase, orderFinalPrice, modalOn, setModalOn}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider