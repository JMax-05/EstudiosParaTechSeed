import fs from 'node:fs/promises'
import { text } from 'node:stream/consumers'

Promise.all([
    fs.readFile('archivo.txt', 'utf-8'),
    fs.readFile('archivo2.txt', 'utf-8')
]).then(([text1, text2]) => {
    console.log(text1)
    console.log(text2)
})