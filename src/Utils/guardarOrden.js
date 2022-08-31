
import { collection, doc, getDoc, getDocs, query, setDoc, where, writeBatch } from "firebase/firestore";
import { db } from "../Firebase/config";
import stockUpdate from "../StockUpdate";
import comprasRealizadas from "./comprasRealizadas";


const guardarOrden = async (cart, orden, userName, userPass, idUser, setNewPurchase, modal, modalPurch, setGetPurch, enqAlert) => {

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
    
                    if (outOfStock.length === 0 && userName !== "") {
    
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
                        modal(true);
                        stockUpdate(cart, enqAlert);

                        enqAlert('your purchase was successful', {variant:"info"})
                        
    
                    } else {
                        enqAlert("log in to make a purchase", {variant : "info"});
                    }
    

                })

        }

        catch(error){
            enqAlert(error, {variant:"error"});
        }
    })

}

export default guardarOrden;