import fs from 'node:fs'
console.log("Empezando a leer el primer texto")
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(`Primer texto: ${text}`)
})
console.log("Haciendo cosas mientras leo")
console.log("Empezando a leer el segundo texto")
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log(`Segundo texto: ${text}`)
})