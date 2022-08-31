import { updateDoc, doc, getDoc } from "firebase/firestore";
import { useContext } from "react";
import { Shop } from "../Context/ShopContext";
import { db } from '../Firebase/config';

const stockUpdate = async (cart, enqAlert) => {

    
    try {
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
    
            updateStock(productId, qty);
        });
    } catch (error) {
        enqAlert(error, {variant : "error"})
    }

}

export default stockUpdate