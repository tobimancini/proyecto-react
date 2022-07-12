import React, {useEffect, useState} from "react";
import ItemList from "../../Components/ItemList";
import './styles.css';
import {useParams} from 'react-router-dom';

const ItemListContainer = () =>{
    
    const [productos, setProductos] = useState([]);
    const[productosFiltrados, setProductosFiltrados] = useState([])

    const params = useParams();

    console.log(params);

    useEffect(()=>{
        const getProductos = async() => {
            try{
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                console.log(data);
                setProductos(data);
                setProductosFiltrados(data);
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

    console.log(productos);
    
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