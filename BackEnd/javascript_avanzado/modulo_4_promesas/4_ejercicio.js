// Procesamiento de Pedido: Crea una cadena de 3 promesas:

// validarPago() -> empaquetarProducto() -> enviarConfirmacion().
// Cada una debe pasar un dato a la siguiente (ej: el ID del pedido).

const validarPago = (id, pago) => {
    return new Promise((resolve, reject) => {
        console.log("Iniciando Pago...")
        setTimeout(() => resolve({id: id, pago: pago}), 2000)
    })
}
const empaquetarProducto = producto => {
    return new Promise((resolve, reject) => {
        console.log("Iniciando Empaquetamiento...")
        setTimeout(() => resolve({...producto, empaquetado: true}), 2000)
    })
}
const enviarConfirmacion = envio => {
    return new Promise((resolve, reject) => {
        console.log("Iniciando Envio...")
        setTimeout(() => resolve(`Envio realizado con éxito`), 2000)
    })
}
validarPago(123, 3500)
    .then(msm => console.log(`Pago: ${msm.pago}`))
    .then(empaquetar => empaquetarProducto(empaquetar))
    .then(confirmacion => enviarConfirmacion(confirmacion))
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => console.log(`.... Algo :D`))
