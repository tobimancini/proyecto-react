import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase/config";

const loginUsuario = async (name, pass, functLogin, functPassword, functUser, functId, log, enqAlert) => {

    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("nombre", "==", name), where("contraseña", "==", pass));

        const querySnapshot = await getDocs(q);

        if (querySnapshot.size > 0) {
            functLogin(true);
            functPassword(pass);
            functUser(name);

            // setModalLogin(false)

            querySnapshot.forEach(doc => {
                functId(doc.id);
            });

        }
        // }else{

        // enqAlert("no existe el usuario", {variant:"error"});

        // }
    } catch (error) {
        enqAlert(error, { variant: "error" });
    }


}

export default loginUsuario;