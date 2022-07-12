import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from '../../Components/ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
  
    const [productDetail, setProductDetail] = useState({});
    const params = useParams();

    console.log(params);

    useEffect(() => {
        const getProductDetail = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
                const data = await res.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        }
        setTimeout(getProductDetail(), 2000);
    }, [params])
  
    return (
        Object.keys(productDetail).length !== 0 ?
        <ItemDetail product={productDetail}/> :
        <p>Loading...</p>
    )
}

export default ItemDetailContainer