import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/config";
import ordenGenerada from "./generarOrden";
import guardarOrden from "./guardarOrden";

const comprasRealizadas = async (id, nuevaCompra) => {

    const comprasRef = doc(db, "users", id);
    const docSnap = await getDoc(comprasRef);

    if (docSnap.exists()) {

    let compras = docSnap.data().compras;
    let comprasArray = Object.keys(compras).map(function (key) {return [Number(key), compras[key]];});
    
    console.log(comprasArray);
    console.log(comprasArray.length);

    let siguienteCompra = parseInt(comprasArray.length)+1;
    console.log(siguienteCompra);

    nuevaCompra(siguienteCompra); 

    return siguienteCompra;
    
    } else {
    console.log("No such document!");
    }
}

export default comprasRealizadas;