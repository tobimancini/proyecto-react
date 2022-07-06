import React from 'react'
import './styles.css';

const ItemDetail = ({product}) => {
    
    console.log(product);
    
    return (
        <div className='productDetails'>
            <img className='productImage' src={product.image}/>

            <div className='details'>
                <h1 className='productTitle'>{product.title}</h1>
                <p className='productDescription'>Description:<br/><br/>{product.description}</p>
                <p className='productPrice'>$ {product.price}</p>
            </div>

        </div>
    )
}

export default ItemDetail