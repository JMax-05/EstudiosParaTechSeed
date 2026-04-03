// Esto se usa en modulos q no tengan promesas de forma nativa

import fs from 'node:fs'
import { promisify } from 'node:util'

const fsReadPromise = promisify(fs.readFile)
fsReadPromise('archivo.txt', 'utf-8')
    .then(text => {
        console.log(text)
        console.log(typeof text)
        console.log(`Texto 1: ${text}`)
    })
    .catch(err => console.log(`Error: ${err}`))
console.log("Texto en medio")
fsReadPromise('archivo2.txt', 'utf-8')
    .then(text => console.log(`Texto 2: ${text}`))
    .catch(err => console.log(`Error: ${err}`))