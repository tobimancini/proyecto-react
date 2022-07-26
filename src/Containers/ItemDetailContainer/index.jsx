import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from '../../Components/ItemDetail';
import {useParams} from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({});
    const params = useParams();

    console.log(params);

    useEffect(() => {
        const getProductDetail = async () => {
            try {

                const docRef = doc(db, "products", params.productId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log(docSnap.id)
                    console.log("Document data:", docSnap.data());
                    const productDetail = {id: docSnap.id, ...docSnap.data()}
                    setProductDetail(productDetail)
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }

                // const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
                // const data = await res.json();
                // setProductDetail(data);
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