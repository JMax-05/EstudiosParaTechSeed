// El Árbitro de Carreras (Promise.race): Crea tres promesas que representen a tres corredores. Cada una se resuelve en un tiempo aleatorio entre 1 y 5 segundos. Usa Promise.race para imprimir quién ganó la medalla de oro.
const corredorA = () => {
    return new Promise((resolve, reject) => {
        const numRand = Math.round(Math.random()*20)
        setTimeout(() => {
            resolve("A")
        }, numRand)
    })
}
const corredorB = () => {
    return new Promise((resolve, reject) => {
        const numRand = Math.round(Math.random()*20)
        setTimeout(() => {
            resolve("B")
        }, numRand)
    })
}
const corredorC = () => {
    return new Promise((resolve, reject) => {
        const numRand = Math.round(Math.random()*20)
        setTimeout(() => {
            resolve("C")
        }, numRand)
    })
}

Promise.race([corredorA(), corredorB(), corredorC()])
    .then(e => console.log(`El ganador es ${e}`))
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => console.log(`Carrera finalizada`))