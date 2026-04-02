/*
El Validador de Edad: Crea una promesa que reciba una edad. Si es mayor o igual a 18, debe resolverse con "Acceso concedido"; de lo contrario, debe rechazarse con "Acceso denegado".
*/

const validadorDeEdad = edad => {
    return new Promise((resolve, reject) => {
        console.log("Iniciando Validacion ...")
        setTimeout( () => {
            edad>=18 ? resolve("--- Acceso concedido ---") : reject("--- Acceso denegado ---")
        }, 2000)
    })
}

validadorDeEdad(17)
    .then(msm=>{
        console.log(`Validacion: ${msm}`)
    })
    .catch(err=>{
        console.log(`Validacion: ${err}`)
    })
    .finally(()=>{
        console.log("Validacion Terminada ...")
    })