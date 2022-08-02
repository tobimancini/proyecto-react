import { addDoc, collection} from "firebase/firestore";
import { db } from "../Firebase/config";


const nuevoUsuario = async(nombre, contraseña, mail, direccion) => {
  
        const docRef = await addDoc(collection(db, "users"), {
            nombre: nombre,
            contraseña: contraseña,
            mail: mail,
            direccion: direccion 
          });
          console.log("Document written with ID: ", docRef.id);

}

export default nuevoUsuario;