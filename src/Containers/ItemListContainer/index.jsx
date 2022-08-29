import React, { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList";
import './styles.css';
import { useParams } from 'react-router-dom';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/config';
import { BsFillEmojiSunglassesFill } from 'react-icons/bs';
import swal from 'sweetalert';
import swalError from "../../Components/SweetAlert/error";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    const params = useParams();

    useEffect(() => {
        const getProductos = async () => {
            try {

                const q = query(collection(db, "products"));
                const querySnapshot = await getDocs(q);
                const productos = []
                querySnapshot.forEach((doc) => {
                    productos.push({ id: doc.id, ...doc.data() })
                });

                setProductos(productos);
                setProductosFiltrados(productos);

            } catch (error) {
                console.log(error);
            }
        }

        getProductos();
    }, []);

    useEffect(() => {
        if (params?.categoryId) {
            const productosFiltrados = productos.filter(producto => producto.category === params.categoryId);
            setProductosFiltrados(productosFiltrados);
            console.log(params);
        } else {
            setProductosFiltrados(productos);
        }

    }, [params, productos]);


    return (
        <div className="itemListContainer">
            {
                !params.categoryId ?
                    <>
                        <p className="initialTxt">hi there,</p>
                        <h1 className="homeTitle">Welcome and happy shopping!</h1>
                        <div className="homeContainer">
                            <BsFillEmojiSunglassesFill className="emojiFace" />
                            <p className="homeText">Here in RACOON we have all kinds of variety of products. From clothing to electronics, and even jewelry. You will find everything you need within a click.</p>
                        </div>
                        <div className="logoEnjoy">
                            <div className="racoonContainer">
                                <div className="racoonLogo"></div>
                                <div className="racoonTxt"></div>
                            </div>
                            <h2 className="categoryTitle">enjoy!</h2>
                        </div>
                    </>
                    :
                    productos.length !== 0 ?
                        <>
                            <h2 className="categoryTitle">{params.categoryId}</h2>
                            <ItemList products={productosFiltrados} />
                        </>
                        :
                        <p className="loading">Loading...</p>
            }
        </div>
    )
}

export default ItemListContainer;