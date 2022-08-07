import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase/config";

const loginUsuario = async(name, pass, functLogin, functPassword, functUser, functId) => {
    
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("nombre", "==", name), where("contraseña", "==", pass));

    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.size>0) {
        functLogin(true);
        functPassword(pass);
        functUser(name);
        
        querySnapshot.forEach(doc => {
            functId(doc.id);
            console.log(doc.id);
        });

    }else{
        console.log("no existe el usuario");
    }
}

export default loginUsuario;