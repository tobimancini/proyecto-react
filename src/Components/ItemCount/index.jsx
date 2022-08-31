import React, { useContext, useEffect } from "react";
import './styles.css';
import { useState } from "react";
import { Shop } from "../../Context/ShopContext";

const ItemCount = ({ onConfirm, stock }) => {

    const {enqueueSnackbar} = useContext(Shop);

    const handleConfirm = () => {
        const qtyChosen = document.getElementById('qtyChosen').value;
        // setCartQty(qtyChosen);
        qtyChosen <= stock ?
            onConfirm(qtyChosen) :
            enqueueSnackbar("value > stock available", {variant : "info"});
    }

    const [stockAvailable, setStockAvailable] = useState([]);


    useEffect(() => {
        let stockArray = [];
        for (let i = 0; i < stock; i++) {
            const unidades = i + 1;
            stockArray.push(unidades);

            console.log(stockArray);
        }

        setStockAvailable(stockArray);

    }, [])



    return (

        <>
            {
                !stockAvailable.length ?
                    <h3 className="noStock">No stock available at the moment.</h3>
                    :
                    <>
                        <div className="qtyContainer">
                            <h3 className="qtyTxt">Quantity:</h3>
                            <select id="qtyChosen" name="qty">
                                {
                                    stockAvailable.map(unidades => {
                                        return <option value={parseInt(unidades)}>{unidades}</option>
                                    })
                                }
                            </select>
                            <p className="stockAv">({stockAvailable.length} available)</p>
                        </div>
                        <button className="btnConfirm" onClick={() => handleConfirm()}>Add to cart</button>
                    </>
            }
        </>
    )
}

export default ItemCount;