const obtenerDatos = () => {
    let user = localStorage.getItem('user');
    let pass = localStorage.getItem('pass');

    if (user != null & pass != null) {
        return true;
    } else {
        return false;
    }
}

export default obtenerDatos