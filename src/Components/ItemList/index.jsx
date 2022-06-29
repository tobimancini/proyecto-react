import React from 'react'
import Item from '../Item'
import './styles.css';

const ItemList = ({products}) => {
  return (
    <div className='itemList'>
        {products.map(producto => {
            return <Item product={producto} key={producto.id}/>
        })}
    </div>
  )
}

export default ItemList