
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where, writeBatch } from "firebase/firestore";
import { db } from "../Firebase/config";
import stockUpdate from "../StockUpdate";
import obtenerDatos from "../Storage/obtenerDatos";
import comprasRealizadas from "./comprasRealizadas";


const guardarOrden = async (cart, orden, userName, userPass, idUser, setNewPurchase, modal, modalPurch, setGetPurch) => {

    const batch = writeBatch(db)

    const outOfStock = []

    cart.forEach((productoEnCart) => {
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
                console.log("Productos fuera de stock:");
                console.log(outOfStock);

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
                    // stockControl(userId, cart);

                } else {
                    let mensaje = ''
                    for (const producto of outOfStock) {
                        mensaje += `${producto.title}`
                    }
                    alert(`Productos fuera de stock: ${mensaje}`)
                }

                console.log(outOfStock.length);

                // let userStored = localStorage.getItem('user');
                // let passStored = localStorage.getItem('pass');

                // if (userStored != null && passStored != null && outOfStock.length === 0) {
                //     modal(true);
                //     stockUpdate(cart)
                // } else {
                //     console.log("inicie sesión para realizar una compra");
                //     console.log(userStored, passStored);
                // }

                // // obtenerDatos() === true ?
                // //     modal(true) && stockUpdate(cart) :
                // //     console.log("inicie sesión para realizar una compra");

                // // console.log(obtenerDatos());

                if (outOfStock.length === 0) {
                    modal(true);
                    stockUpdate(cart);
                } else {
                    console.log("inicie sesión para realizar una compra");
                }
            })
    })

}

export default guardarOrden;