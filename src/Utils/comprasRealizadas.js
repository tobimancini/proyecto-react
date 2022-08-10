import { doc, getDoc } from "firebase/firestore";
import swalError from "../Components/SweetAlert/error";
import { db } from "../Firebase/config";
import swal from 'sweetalert';

const comprasRealizadas = async (id, nuevaCompra, modalPurch, setGetPurch) => {

    try {
        const comprasRef = doc(db, "users", id);
        const docSnap = await getDoc(comprasRef);

        if (docSnap.exists()) {

            let compras = docSnap.data().compras;
            let comprasArray;

            if (compras == null) {
                comprasArray = [];
            } else {
                comprasArray = Object.keys(compras).map(function (key) { return [Number(key), compras[key]]; });
            }

            let siguienteCompra = parseInt(comprasArray.length) + 1;

            //si se invoca esta funcion por el modal de compras realizadas, no hace falta ejecutarse la funcion de nueva compra.
            if (modalPurch === false) {
                nuevaCompra(siguienteCompra);
            } else {
                setGetPurch(comprasArray)
            }

            return (
                siguienteCompra
            )
        }
    }
    catch (error) {
        console.log(error);
    }
}

export default comprasRealizadas;