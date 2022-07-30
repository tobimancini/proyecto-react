import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Shop } from '../../Context/ShopContext';
import './styles.css';

const Modal = () => {

    const {setModalOn} = useContext(Shop);
    const[logOrSign, setLogOrSign] = useState("login")

    useEffect(() => {

        const handleEsc = (evt) => {
            if (evt.keyCode === 27) {
                setModalOn(false);
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



    // TENGO QUE DARLE UN USE STATE , PARA QUE CUANDO ESTE EN UN ESTADO, SE RENDERICE EL INICIO DE SESION, Y CUANDO ESTE EN OTRO ESTADO, SE RENDERICE EL SIGN IN

    return (
        <div className='modalBG'>
            <div className='modal'>
                <div class="form">
                    <form class={logOrSign==="login"?"register-form off":"register-form"}>
                        <p>please complete the following for registration</p>
                        <input type="text" placeholder="name"/>
                        <input type="password" placeholder="password"/>
                        <input type="text" placeholder="email address"/>
                        <button>create</button>
                        <p class="message">already registered? <a href="#" onClick={change}>sign in</a></p>
                    </form>
                    <form class={logOrSign==="sign"?"login-form off":"login-form"}>
                        <p>please complete the following to log in</p>
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>login</button>
                        <p class="message">not registered? <a href="#" onClick={change}>create an account</a></p>
                    </form>
                </div>

                <button className='closeModal' onClick={()=>setModalOn(false)}>X</button>
            </div>
        </div>
    )
}

export default Modal