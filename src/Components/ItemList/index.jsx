import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../Context/ShopContext';
import Item from '../Item'
import './styles.css';

const ItemList = ({products}) => {

  const {estadoA, setEstadoA} = useContext(Shop);
  console.log(estadoA);

  const handleChangeState = () =>{
    setEstadoA("Otro Valor")
    console.log(estadoA);
  }

  return (
    <div className='itemList'>
        {products.map(producto => {
            return <Item product={producto} key={producto.id}/>
        })}
        <button onClick={handleChangeState}>Change state</button>
    </div>
  )
}

export default ItemList