import React, {useEffect, useState} from "react";
import ItemList from "../../Components/ItemList";
import './styles.css';
import {useParams} from 'react-router-dom';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/config';
import swal from 'sweetalert';
import swalError from "../../Components/SweetAlert/error";


const ItemListContainer = () =>{
    
    const [productos, setProductos] = useState([]);
    const[productosFiltrados, setProductosFiltrados] = useState([]);
    

    const params = useParams();


    useEffect(()=>{
        const getProductos = async() => {
            try{

                const q = query(collection(db, "products"));
                const querySnapshot = await getDocs(q);
                const productos = []
                querySnapshot.forEach((doc) => {
                productos.push({id: doc.id, ...doc.data()})
                });

                setProductos(productos);
                setProductosFiltrados(productos);

            } catch (error){
                swal(swalError(error));
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
            productos.length !== 0 ?
            <ItemList products={productosFiltrados} /> :
            <p className="loading">Loading...</p>
            }
        </div>
    )
}

export default ItemListContainer;