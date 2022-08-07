import React, { useContext, useEffect, useState } from 'react';
import { Shop } from '../../../Context/ShopContext';
import guardarDatos from '../../../Storage/localStorage';
import nuevoUsuario from '../../../UserData/crearUsuario';
import loginUsuario from '../../../UserData/login';
import './styles.css';

const ModalLogin = () => {

    const {setModalLogin, setLogin, setUser, setPassword, user, password, login, setUserId, userId, setNewPurchase} = useContext(Shop);
    const[logOrSign, setLogOrSign] = useState("login")
    

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

        loginUsuario(name, pass, setLogin, setPassword, setUser, setUserId);
        setModalLogin(false);
        guardarDatos(name, pass);  
    } 

    useEffect(()=>{
        console.log("user:"+user);
        console.log("pass:"+password);
        console.log("login:"+login);
        console.log("userId:"+userId);

        setNewPurchase(1);
    }, [user])

    return (
        <>
                    <form className={logOrSign==="login"?"register-form off":"register-form"}>
                        <p>please complete the following for registration</p>
                        <input id='name' type="text" placeholder="name"/>
                        <input id='pass' type="password" placeholder="password"/>
                        <input id='mail' type="text" placeholder="email address"/>
                        <input id='dir' type="text" placeholder="dirección"/>
                        <div onClick={createUser}>create</div>
                        <p className="message">already registered? <a href="#" onClick={change}>sign in</a></p>
                    </form>
                    <form className={logOrSign==="sign"?"login-form off":"login-form"}>
                        <p>please complete the following to log in</p>
                        <input id="userName" type="text" placeholder="username"/>
                        <input id='userPass' type="password" placeholder="password"/>
                        <div onClick={logIn}>login</div>
                        <p className="message">not registered? <a href="#" onClick={change}>create an account</a></p>
                    </form>
        </>
    )
}

export default ModalLogin