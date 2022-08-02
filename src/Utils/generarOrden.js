
const ordenGenerada = (cart, total, compra) => {

    return {
        compras: {
            [compra]:{
                items: cart,
                total: total,
                createdAt: new Date().toLocaleString()
            }
        }
    }
}

export default ordenGenerada;