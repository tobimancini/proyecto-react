import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { Shop } from '../../../Context/ShopContext';
import { db } from '../../../Firebase/config';
import guardarDatos from '../../../Storage/localStorage';
import nuevoUsuario from '../../../UserData/crearUsuario';
import loginUsuario from '../../../UserData/login';

const ModalLogin = () => {

    const {setModalLogin, setLogin, setUser, setPassword, user, password, login, setUserId, userId, setNewPurchase, logOrSign, setLogOrSign, enqueueSnackbar} = useContext(Shop);
    

    useEffect(() => {

        const handleEsc = (evt) => {
            if (evt.keyCode === 27) {
                setModalLogin(false);
            }
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };

    }, [])

    const change = () =>{
        logOrSign==="login"?
        setLogOrSign("sign"):
        setLogOrSign("login");
    }

    const createUser = () =>{
        const name = document.getElementById('name').value;
        const pass = document.getElementById('pass').value;
        const mail = document.getElementById('mail').value;
        const dir = document.getElementById('dir').value;

        nuevoUsuario(name, pass, mail, dir);
        setModalLogin(false);
    }

    const logIn = async() =>{
        const name = document.getElementById('userName').value;
        const pass = document.getElementById('userPass').value;

        loginUsuario(name, pass, setLogin, setPassword, setUser, setUserId, enqueueSnackbar, setModalLogin);        
        guardarDatos(name, pass); 


        //si existe el usuario que se esta ingresando se cierra el modal, sino envia alerta de error.
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("nombre", "==", name), where("contraseña", "==", pass));
        
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.size>0){
            setModalLogin(false);
        }else{
            enqueueSnackbar("the user you typed doesn't exist", {variant:"error"})
        }
        
    } 

    useEffect(()=>{
        setNewPurchase(1);
    }, [user])

    return (
        <>
                    <form className={logOrSign==="login"?"register-form off":"register-form"}>
                        <p className='loginTitle'>Sign Up</p>
                        <input className='loginInput' id='name' type="text" placeholder="name"/>
                        <input className='loginInput' id='pass' type="password" placeholder="password"/>
                        <input className='loginInput' id='mail' type="text" placeholder="email"/>
                        <input className='loginInput' id='dir' type="text" placeholder="adress"/>
                        <div className='loginBtn' onClick={createUser}>Create</div>
                        <p className="message">Already registered? <a className='switch' href="#" onClick={change}>Log in</a></p>
                    </form>
                    <form className={logOrSign==="sign"?"login-form off":"login-form"}>
                        <p className='loginTitle'>Log In</p>
                        <input className='loginInput' id="userName" type="text" placeholder="username"/>
                        <input className='loginInput' id='userPass' type="password" placeholder="password"/>
                        <div className='loginBtn' onClick={logIn}>Log In</div>
                        <p className="message">Not registered? <a className='switch' href="#" onClick={change}>Sign up</a></p>
                    </form>
        </>
    )
}

export default ModalLogin