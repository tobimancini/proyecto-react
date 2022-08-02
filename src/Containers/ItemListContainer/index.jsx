import React, {useEffect, useState} from "react";
import ItemList from "../../Components/ItemList";
import './styles.css';
import {useParams} from 'react-router-dom';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/config';
import algoritmoGuardadoAutomático from "../../Utils/guardarProductos";
import Modal from "../../Components/Modal";
import { useContext } from "react";
import { Shop } from "../../Context/ShopContext";


const ItemListContainer = () =>{
    
    const [productos, setProductos] = useState([]);
    const[productosFiltrados, setProductosFiltrados] = useState([]);

    const{modalOn, user, password, login, userId, setNewPurchase} = useContext(Shop);
    

    const params = useParams();


    useEffect(()=>{
        const getProductos = async() => {
            try{
                // algoritmoGuardadoAutomático();

                const q = query(collection(db, "products"));
                const querySnapshot = await getDocs(q);
                const productos = []
                querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                productos.push({id: doc.id, ...doc.data()})
                });

                console.log(productos);
                setProductos(productos);
                setProductosFiltrados(productos);



                // const response = await fetch('https://fakestoreapi.com/products');
                // const data = await response.json();
                // console.log(data);
                // setProductos(data);
                // setProductosFiltrados(data);
            } catch (error){
                console.log("hubo un error");
                console.log(error);
            }
        }

        getProductos();
    }, []);

    useEffect(()=>{
        if (params?.categoryId) {
            const productosFiltrados = productos.filter(producto => producto.category === params.categoryId);
            setProductosFiltrados(productosFiltrados);
        } else {
            setProductosFiltrados(productos);
        }
    },[params, productos]);

    
    return (
        <div className="itemListContainer">
            {
                modalOn===true ?
                <Modal/>:
                null
            }
            {
            productos.length !== 0 ?
            <ItemList products={productosFiltrados} /> :
            <p className="loading">Loading...</p>
            }
        </div>
    )
}

export default ItemListContainer;