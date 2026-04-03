// MODULOS NATIVOS
// const os = require('os')  // esto era antes, ahora ya no se usa :D
// const os = require('node:os') // Lo correcto es hacer esto, aunq ambas funcionan, pero se tiene q hacer lo correcto
import os from 'node:os' // Lo correcto es hacer esto, aunq ambas funcionan, pero se tiene q hacer lo correcto
console.log(os.platform())
console.log(os.arch())
// console.log(os.cpus())
console.log(os.release())

console.log(os.freemem()/1024/1024)
console.log(os.totalmem()/1024/1024)

console.log(`uptime: ${os.uptime/60/60/24}`)