// Consulta de Base de Datos: Simula una consulta a una DB que tarda 3 segundos. Debe tener un 30% de probabilidad de fallar (error de conexión). Maneja el error con un .catch() que imprima un mensaje de "Reintentando...".
const probabilidad_30_percent = [1,1,1,0,0,0,0,0,0,0]
const queryDB = query => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numRand = Math.round(Math.random()*10)
            const probabilidad = probabilidad_30_percent[numRand]
            if (probabilidad === 1) {
                resolve(query)
            } else {
                reject(`Error de conexion`)
            }
        }, 3000)
    })
}
queryDB("select * from Library")
    .then(e => console.log(`Query: ${e}`))
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => console.log("Consulta terminada..."))