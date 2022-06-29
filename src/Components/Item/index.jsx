import React from 'react'
import './styles.css';

const Item = ({product}) => {
  return (
    <div className='item'>
        <h3 className='itemTitle'>{product.title}</h3>
        <img className='itemImage' src={product.image} alt="" />
        <div className='itemPrice'>${product.price}</div>
        <div className='itemDetails'>Details</div>
    </div>
  )
}

export default Item