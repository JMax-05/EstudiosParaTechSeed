// Temporizador Personalizado: Crea una función que reciba un número de milisegundos y devuelva una promesa que se resuelva exactamente después de ese tiempo con el mensaje "Tiempo cumplido".
const temporalizador = (time) => {
    return new Promise((resolve, reject) => {
        if (typeof time === 'number' && time >= 0) {
            console.log("Iniciando el temporalizador, marcando en 0")
            setTimeout(() => {
                    resolve("Sin problemas")
                }, time*1000);
        } else {
            reject("Error en el tipo de dato agregado")
        }
    })
}

temporalizador(2)
    .then(msm => {
        console.log(`Then: ${msm}`)
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    })
    .finally(() => {
        console.log("TemporalizadorTemporalizado")
    })