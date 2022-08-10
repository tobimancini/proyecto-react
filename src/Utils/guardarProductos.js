import { addDoc, collection } from "firebase/firestore";
import swalError from "../Components/SweetAlert/error";
import { db } from "../Firebase/config";
import swal from 'sweetalert';

const algoritmoGuardadoAutomático = async () => {
    try {
        const response = await fetch('/mocks/data.json');
        const productosAGuardar = await response.json();

        productosAGuardar.forEach(async (producto) => {
            const docRef = await addDoc(collection(db, "products"), {
                title: producto.title,
                price: producto.price,
                description: producto.description,
                category: producto.category,
                image: producto.image,
                stock: 20,
            });
        })
    }
    catch (error) {
        swal(swalError(error));
    }
}

export default algoritmoGuardadoAutomático;