import fs from 'node:fs/promises'

fs.readFile('./archivo.txt', 'utf-8')
    .then(text => console.log(`Texto 1: ${text}`))
    .catch(err => console.log(`Error: ${err}`))
console.log("Haciendo algo entre tareas")
fs.readFile('./archivo2.txt', 'utf-8')
.then(text => console.log(`Texto 2: ${text}`))
.catch(err => console.log(`Error: ${err}`))
console.log("Haciendo algo entre tareas2")