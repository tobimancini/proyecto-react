import React from 'react'

//guardo los datos del usuario y del nivel de dificultad elegido.

const guardarDatos = (user, pass) => {

    localStorage.setItem('user', `${user}`);
    localStorage.setItem('pass', `${pass}`);

}

export default guardarDatos