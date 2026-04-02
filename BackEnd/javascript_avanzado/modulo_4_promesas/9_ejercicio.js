// Validación de Stock: Crea una promesa que reciba un objeto producto y una cantidad. Si el stock es suficiente, resta la cantidad y resuelve. Si no, rechaza. Usa .finally() para imprimir "Inventario actualizado" sin importar el resultado.
const validarStock = (product, amount) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product.stock >= amount) {
                product.stock -= amount
                resolve(product)
            } else {
                reject(`Validacion rechazada`)
            }
        }, 2500)
    })
}
validarStock({name: "cellphone", stock: 15}, 25)
    .then(e => {
        console.log(e.stock)
        return e
    })
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => console.log(`Inventario actualizado`))