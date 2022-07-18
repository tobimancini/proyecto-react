import React, { createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [estadoA, setEstadoA] = useState('valor predeterminado');

    const [cart, setCart] = useState([]);

    const addItem = (producto, cantidad) =>{
        // console.log(producto, cantidad);
        const productoRepetido = isInCart(producto)
        console.log(productoRepetido);

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

    return (
        <Shop.Provider value={{estadoA, setEstadoA, addItem, cart, removeItem, clearAll}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider