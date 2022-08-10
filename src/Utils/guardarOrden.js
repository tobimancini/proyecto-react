
import { collection, doc, getDoc, getDocs, query, setDoc, where, writeBatch } from "firebase/firestore";
import { db } from "../Firebase/config";
import stockUpdate from "../StockUpdate";
import comprasRealizadas from "./comprasRealizadas";
import swal from 'sweetalert';
import swalError from "../Components/SweetAlert/error";


const guardarOrden = async (cart, orden, userName, userPass, idUser, setNewPurchase, modal, modalPurch, setGetPurch) => {

    const batch = writeBatch(db)

    const outOfStock = []

    cart.forEach((productoEnCart) => {
        try{
            getDoc(doc(db, 'products', productoEnCart.id))
                .then(async (documentSnapshot) => {
    
                    const producto = { ...documentSnapshot.data(), id: documentSnapshot.id };
    
                    if (producto.stock >= productoEnCart.quantity) {
                        batch.update(doc(db, 'products', producto.id), {
                            stock: producto.stock - productoEnCart.quantity
                        })
                    } else {
                        outOfStock.push(producto)
                    }
    
                    if (outOfStock.length === 0) {
    
                        //Obtengo el ID del User logueado.
                        const q = query(collection(db, "users"), where("nombre", "==", userName), where("contraseña", "==", userPass));
    
                        let userId = "";
                        const querySnapshot = await getDocs(q);
                        querySnapshot.forEach((doc) => {
                            userId = doc.id;
                        });
    
                        //Le agrego al usuario la compra realizada.
                        await setDoc(doc(db, "users", userId), orden, { merge: true });
                        comprasRealizadas(idUser, setNewPurchase, modalPurch, setGetPurch);
                        
    
                    } else {
                        let mensaje = ''
                        for (const producto of outOfStock) {
                            mensaje += `${producto.title}`
                        }
                        swal(swalError(`productos fuera de stock: ${mensaje}`))
                    }
    
                    if (outOfStock.length === 0) {
                        modal(true);
                        stockUpdate(cart);
                    } else {
                        swal(swalError("inicie sesión para realizar una compra"));
                    }
                })

        }

        catch(error){
            swal(swalError(error));
        }
    })

}

export default guardarOrden;