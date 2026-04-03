// import { readFile } from 'node:fs/promises'

// console.log("Empezando a leer el primer texto")
// const firstText = await readFile('./archivo.txt', 'utf-8')
// console.log(`Primer texto: ${firstText}`)

// console.log("Haciendo cosas mientras leo")
// console.log("Empezando a leer el segundo texto")

// const secondText = await readFile('./archivo2.txt', 'utf-8')
// console.log(`Segundo texto: ${secondText}`)


import fs from 'node:fs'
import { promisify } from 'node:util'
const readPromise = promisify(fs.readFile)



//IFEE - Inmediatly Invoked Function Expression
;( async ()=>{
    console.log("Empezando a leer el primer texto")
    const firstText = await readPromise('./archivo.txt', 'utf-8')
    console.log(`Primer texto: ${firstText}`)

    console.log("Haciendo cosas mientras leo")
    console.log("Empezando a leer el segundo texto")

    const secondText = await readPromise('./archivo2.txt', 'utf-8')
    console.log(`Segundo texto: ${secondText}`)
})()