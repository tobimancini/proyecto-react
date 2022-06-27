import React from "react";
import './styles.css';
import { useState } from "react";

const ItemCount = ({handleAdd, initialStock}) => {
    const [count, setCount] = useState(0);
    const onAdd = () => {
        count < initialStock
        ?
        setCount(count+1)
        :
        console.log("NO HAY MAS STOCK");
    };
    const onDeduct = () => {
        count > 0
        ?
        setCount(count-1)
        :
        setCount(count);
    };

    let available = initialStock - count;



    return (
        <div className="itemCount">
            <div className="itemYStock">
                <p className="item">item name</p>
                <p className="stock">stock : {available}</p>
            </div>
            <div className="quantityChange">
                <button className="addDeduct" onClick={onDeduct}>-</button>
                <p className="quantity">{count}</p>
                <button className="addDeduct" onClick={onAdd}>+</button>
            </div>
            <div>
                <button onClick={handleAdd} className="addCart">add to cart</button>
            </div>
        </div>
    )
}

export default ItemCount;