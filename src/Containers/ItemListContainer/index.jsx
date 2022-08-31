import React, { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList";
import './styles.css';
import { useParams } from 'react-router-dom';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/config';
import ClipLoader from "react-spinners/ClipLoader";
import { RiWhatsappFill } from 'react-icons/ri';
import { SyncLoader } from "react-spinners";
import { useContext } from "react";
import { Shop } from "../../Context/ShopContext";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const {enqueueSnackbar} = useContext(Shop);

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
        <>
        {
        !productos.length ?
        <div className="loadingContainer">
            <SyncLoader size={30} color={"#e98049"} />
        </div>
        :
        <div className={!params.categoryId?"itemListContainer leaveLogoSpace":"itemListContainer"}>
            {
                !params.categoryId ?
                    <>
                        <p className="initialTxt">Hi there,</p>
                        <h1 className="homeTitle">Welcome and happy shopping!</h1>
                        <div className="homeContainer">
                            <div className="caritaFeliz"></div>
                            <p className="homeText">Here in RACOON we have all kinds of variety of products. From clothing to electronics, and even jewelry. Find everything YOU need within a click.</p>
                        </div>
                        <div className="bigRacoon"></div>
                        <div className="bigRacoonTxt"></div>
                        <div className="rainbowVertical">
                            <span className="colorv red"></span>
                            <span className="colorv orange"></span>
                            <span className="colorv lgreen"></span>
                            <span className="colorv dgreen"></span>
                        </div>
                    </>
                    :
                    <>
                        <h2 className="categoryTitle">{params.categoryId}</h2>
                        <ItemList products={productosFiltrados} />
                        <div className="rainbow">
                            <span className="color red"></span>
                            <span className="color orange"></span>
                            <span className="color lgreen"></span>
                            <span className="color dgreen"></span>
                        </div>
                    </>

            }

            <RiWhatsappFill className="wAppLogo" />

        </div>
        }
        </>
    )
}

export default ItemListContainer;