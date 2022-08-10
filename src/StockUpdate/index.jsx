import { updateDoc, doc, getDoc } from "firebase/firestore";
import swalError from "../Components/SweetAlert/error";
import { db } from '../Firebase/config';
import swal from 'sweetalert';

const stockUpdate = async (cart) => {
    
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
        swal(swalError(error))
    }

}

export default stockUpdate