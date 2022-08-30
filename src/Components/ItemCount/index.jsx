import React, { useEffect } from "react";
import './styles.css';
import { useState } from "react";
import swal from 'sweetalert';
import swalError from "../SweetAlert/error";

const ItemCount = ({ onConfirm, setCartQty, initial, stock }) => {

    const handleConfirm = () => {
        const qtyChosen = document.getElementById('qtyChosen').value;
        // setCartQty(qtyChosen);
        qtyChosen <= stock ?
            onConfirm(qtyChosen) :
            alert("value > stock available");
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
                    <h3 className="noStock">No hay stock disponible en este momento.</h3>
                    :
                    <>
                        <div className="qtyContainer">
                            <h3 className="qtyTxt">Cantidad:</h3>
                            <select id="qtyChosen" name="qty">
                                {
                                    stockAvailable.map(unidades => {
                                        return <option value={parseInt(unidades)}>{unidades}</option>
                                    })
                                }
                            </select>
                            <p className="stockAv">({stockAvailable.length} disponibles)</p>
                        </div>
                        <button className="btnConfirm" onClick={() => handleConfirm()}>Agregar al carrito</button>
                    </>
            }
        </>
    )
}

export default ItemCount;