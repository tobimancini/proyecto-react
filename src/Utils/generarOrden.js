
const ordenGenerada = (nombre, direccion, mail, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            direccion: direccion,
            mail: mail
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default ordenGenerada;