/**
 * Promesas:
 * Una promesa es un objeto que representa el exito o el fracaso
 * de una operacion asincrona
 * 
 * Estados de una promesa:
 * Pending(pendiente): Estado inicial de la operacion, aun no ha terminado
 * Fulfield/Resolver (Resuelta): La operacion terminó con éxito
 * Rejected (rechazada): La operacion falló y tenemos un error
 */

/**
 * Gemini ha dicho
Para entender cómo se usa new Promise(), imagina que es un contenedor para una tarea que no sabemos cuánto tiempo va a tardar.

El constructor de la promesa recibe una función (llamada executor) que tiene dos "interruptores" automáticos: resolve (para el éxito) y reject (para el fallo).

1. Ejemplo Clásico: El Cajero Automático
Imagina que vas a un cajero. Tú pides el dinero (creas la promesa), pero el cajero tiene que conectarse al banco (proceso asíncrono).


 */

const retirarDinero = monto => {
    return new Promise((resolve, reject) => {
        console.log("Conectando con el banco ...")
        
        setTimeout(()=>{
            const saldoDisponible = 500;
            monto <= saldoDisponible ? resolve(`Toma tus ${monto} soles`) : reject(`Saldo insuficiente`)
        }, 2000)
    })
}

retirarDinero(10000)
    .then(msm => {
        console.log(`Resultado: ${msm}`)
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    })
    .finally(()=>{
        console.log("Proceso finalizado, retire su tarjeta")
    })

