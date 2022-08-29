import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from '../../Components/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';
import swalError from '../../Components/SweetAlert/error';
import swal from 'sweetalert';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({});
    const params = useParams();

    useEffect(() => {
        const getProductDetail = async () => {
            try {

                const docRef = doc(db, "products", params.productId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const productDetail = { id: docSnap.id, ...docSnap.data() }
                    setProductDetail(productDetail)
                }

            } catch (error) {
                swal(swalError(error));
            }
        }
        setTimeout(getProductDetail(), 2000);
    }, [params])

    return (

        Object.keys(productDetail).length !== 0 ?
            <ItemDetail product={productDetail} /> :
            <p className='loading'>Loading...</p>

    )
}

export default ItemDetailContainer