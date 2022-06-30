import React, {useEffect, useState} from "react";
import ItemList from "../../Components/ItemList";
import './styles.css';

const ItemListContainer = ({greeting}) =>{
    
    const [productos, setProductos] = useState(null);

    useEffect(()=>{
        const getProductos = async() => {
            try{
                const response = await fetch('/mocks/data.json');
                const data = await response.json();
                console.log(data);
                setProductos(data);
            } catch (error){
                console.log("hubo un error");
                console.log(error);
            }
        }

        getProductos();
    }, []);
    
    return (
        <div className="itemListContainer">
            <p className="greeting">{greeting}</p>
            {
            productos?
            <ItemList products={productos} /> :
            null
            }
        </div>
    )
}

export default ItemListContainer;