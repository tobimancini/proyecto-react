import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from '../../Components/ItemDetail';

const ItemDetailContainer = () => {
  
    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        const getProductDetail = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products/1');
                const data = await res.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        }
        setTimeout(getProductDetail(), 2000);
    }, [])
  
    return (
        <ItemDetail product={productDetail}/>
        
    )
}

export default ItemDetailContainer