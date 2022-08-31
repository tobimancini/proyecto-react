import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from '../../Components/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';
import { SyncLoader } from 'react-spinners';
import { Shop } from '../../Context/ShopContext';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({});
    const params = useParams();
    const {enqueueSnackbar} = useContext(Shop);

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
                enqueueSnackbar(error, {variant : "error"});
            }
        }
        setTimeout(getProductDetail(), 2000);
    }, [params])

    return (

        Object.keys(productDetail).length !== 0 ?
            <ItemDetail product={productDetail} /> :
            <div className="loadingContainer">
                <SyncLoader size={30} color={"#e98049"} />
            </div>

    )
}

export default ItemDetailContainer