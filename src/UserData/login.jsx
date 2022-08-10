import { collection, query, where, getDocs } from "firebase/firestore";
import swalError from "../Components/SweetAlert/error";
import { db } from "../Firebase/config";
import swal from 'sweetalert';

const loginUsuario = async(name, pass, functLogin, functPassword, functUser, functId, log) => {
    
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("nombre", "==", name), where("contraseña", "==", pass));
    
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.size>0) {
            functLogin(true);
            functPassword(pass);
            functUser(name);
            
            querySnapshot.forEach(doc => {
                functId(doc.id);
            });
    
        }else{
            if (log === true) {
                swal(swalError("no existe el usuario"));
            }
        }
    } catch (error) {
        swal(swalError(error));
    }
}

export default loginUsuario;