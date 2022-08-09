import React from 'react'
import './styles.css';

const PurchaseItem = (purchase) => {

    let date = purchase.purchase.createdAt;

    return (
        purchase.purchase.items.map(item => {
            return <div className='itemContainer'>
                <div className='product'>
                    <img className='itemImg' src={item.image} alt="productImg" />
                    <p className='titleItem'>{item.title}</p>
                </div>
                <p className='textItem'>{date}</p>
                <p className='textItem'>{item.quantity}</p>
                <p className='textItem'>${item.price}</p>
                <p className='textItem'>${item.quantity * item.price}</p>
            </div>
        })
    )
}

export default PurchaseItem

