// Descarga de Archivos: Crea un simulador donde descargues un archivo .zip. Al terminar la descarga (promesa 1), debe iniciar automáticamente la descompresión (promesa 2).
const descarga = file => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(file), 2500)
    })
}
const descomprime = file => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(file), 2500)
    })
}
descarga("/Documents.zip")
    .then(e => {
        console.log(`Descargando el archivo ${e} ...`)
        return descomprime(e)
    })
    .then(e => {
        console.log(`Descomprimiendo el archivo ${e} ...`)
        return e
    })
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => console.log(`Proceso terminado`))