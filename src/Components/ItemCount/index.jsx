import React from "react";
import './styles.css';
import { useState } from "react";

const ItemCount = ({handleAdd, initial, stock}) => {
    const [count, setCount] = useState(initial);
    const onAdd = (qty) => {
        setCount(count+qty)
    };

    let available = stock - count;



    return (
        <div className="itemCount">
            <div className="itemYStock">
                <p className="item">item name</p>
                <p className="stock">stock : {available}</p>
            </div>
            <div className="quantityChange">
                <button className="addDeduct" onClick={()=>onAdd(-1)} disabled={count === initial ? true : null}>-</button>
                <p className="quantity">{count}</p>
                <button className="addDeduct" onClick={()=>onAdd(+1)} disabled={count === stock ? true : null}>+</button>
            </div>
            <div>
                <button onClick={()=>handleAdd(count)} className="addCart">add to cart</button>
            </div>
        </div>
    )
}

export default ItemCount;