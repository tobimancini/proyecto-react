import React from "react";
import ItemCount from "../../Components/ItemCount";
import './styles.css';

const ItemListContainer = ({greeting}) =>{
    return (
        <div>
            <p className="greeting">{greeting}</p>
        </div>
    )
}

export default ItemListContainer;