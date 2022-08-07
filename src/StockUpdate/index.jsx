import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from '../Firebase/config';

const stockUpdate = async (cart) => {
    
    const updateStock = async(id, qty) =>{

        const itemRef = doc(db, "products", id);

        const itemAnalized = await getDoc(itemRef)
        const itemStock = itemAnalized.data().stock;

        updateDoc(itemRef, {
            "stock": (itemStock-qty)
        });
    }

    let productId;
    let qty;

    cart.forEach(el => {
        productId = el.id;
        qty = el.quantity;

        console.log("id: "+productId+", qty: "+qty);
        // console.log(productId, qty);

        updateStock(productId, qty)
    });


    //obtengo los datos de las compras realizadas por cualquier usuario.
 
                                            // const q = query(collection(db, "users"), where("compras", "!=", ""));

                                            // const querySnapshot = await getDocs(q);
                                            // querySnapshot.forEach((doc) => {

                                            //     let obj = doc.data().compras;
                                            //     let arr = Object.keys(obj).map(function (key) { return [obj[key]]; });
                                            //     //este array me devuelve cada compra realizada por este usuario
                                            //     console.log(arr);

                                            //     //esto me devuelve un array que contiene un objeto de cada item comprado con sus datos, de cada compra realizada.
                                            //     arr.forEach(compra => {
                                            //         let items = compra[0].items;
                                            //         console.log(items);

                                            //         items.forEach(item => {
                                            //             console.log(item.id + "=>" + item.quantity);
                                            //             updateStock(item.id, item.quantity)
                                            //         })
                                            //     })

                                            // });
    

    //obtengo los datos de las compras hechas por cualquier usuario, y por cada producto vendido, reviso que cantidad se vendio, y luego se la resto
    // al stock almacenado en los productos de firebase. FIJARME SI SE PUEDEN ACTUALIZAR LOS CAMBIOS CONSTANTEMENTE, CON CADA COMPRA O HASTA CUANDO SE ELIMINA UNA COMPRA DESDE FIREBASE.


}

export default stockUpdate