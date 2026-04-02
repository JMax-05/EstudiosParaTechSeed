// Transformación de Datos: Crea una promesa que obtenga un número aleatorio. El primer .then() debe elevarlo al cuadrado, el segundo debe restarle 10, y el tercero debe imprimir el resultado final.
const transformacion = () => {
    return new Promise((resolve, reject) => {
        let numRand = Math.round(Math.random()*100);
        setTimeout(() => {
            resolve(numRand)
        }, 2000);
    })
}

transformacion()
    .then( e => {
        const cuadrado = e**2;
        console.log(`Al cuadrado: ${cuadrado}`);
        return cuadrado
    })
    .then( e => {
        const resta = e-10;
        console.log(`Restando 10: ${resta}`);
    })
    .then( e => {
        console.log(`Resultado final: ${e}`);
    })
    .catch( err => console.log(`Error: ${err}`))
    .finally(() => console.log(`--- Proceso Terminado ---`))