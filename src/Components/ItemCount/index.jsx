import React from "react";
import './styles.css';
import { useState } from "react";

const ItemCount = ({onConfirm, initial, stock}) => {
    
    const [count, setCount] = useState(initial);

    const handleConfirm = () =>{
        count <= stock ?
        onConfirm(count):
        console.log("Value > stock available");
    }
    

    let available = stock - count;



    return (
        <div className="itemCount">
            <div className="itemYStock">
                <p className="stock">stock : {available}</p>
            </div>
            <div className="quantityChange">
                <button className="addDeduct" onClick={()=> setCount(count => count-1)} disabled={count === initial ? true : null}>-</button>
                <p className="quantity">{count}</p>
                <button className="addDeduct" onClick={()=> setCount(count => count+1)} disabled={count === stock ? true : null}>+</button>
            </div>
            <div>
                <button onClick={handleConfirm} className="addCart">add to cart</button>
            </div>
        </div>
    )
}

export default ItemCount;