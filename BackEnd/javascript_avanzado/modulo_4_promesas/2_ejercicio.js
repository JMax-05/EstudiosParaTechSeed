// Lanzamiento de Moneda: Crea una promesa que simule lanzar una moneda. Usa Math.random(). Si sale cara ( > 0.5), se resuelve; si sale cruz, se rechaza.
const LanzamientoMoneda = moneda => {
    return new Promise((resolve, reject) => {
        console.log("Iniciando lanzamiento de Moneda ...")
        const numRand = Math.round(Math.random())
        setTimeout(() => {
            numRand > 0.5 ? resolve("Cara") : reject("Sello")
        }, 1000)
    })
}

LanzamientoMoneda(10)// Hace referencia a q se lanzo 10 veces
    .then(msm=>{
        console.log(`El lanzamiento sale: ${msm}`)
    })
    .catch(err => {
        console.log(`El lanzamiento sale: ${err}`)
    })
    .finally(() => {
        console.log("Finalizando lanzamiento de Moneda")
    })