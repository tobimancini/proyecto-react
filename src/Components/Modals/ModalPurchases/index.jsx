import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../../Context/ShopContext';
import { useEffect } from 'react';
import comprasRealizadas from '../../../Utils/comprasRealizadas';
import './styles.css';
import PurchaseItem from './PurchaseItem';

const ModalPurchases = () => {

    const { userId, modalPurch, setGetPurch, getPurch } = useContext(Shop);


    useEffect(() => {
        comprasRealizadas(userId, 0, modalPurch, setGetPurch);
    }, [])

    return (
        getPurch.length !== 0
        ?
        <div className='purchaseContainer'>
            <div className='titles'>
                <div className='titleProductPurch'>product</div>
                <div className='titlePurch'>date of purchase</div>
                <div className='titlePurch'>quantity</div>
                <div className='titlePurch'>unit price</div>
                <div className='titlePurch'>total price</div>
            </div>
            <div className='purchase'>
            {getPurch.map(compra => {
                return <PurchaseItem purchase={compra[1]} key={compra[0]} />
            })}
            </div>
        </div>
        :
        <div>no has realizado compras</div>
    )
}

export default ModalPurchases