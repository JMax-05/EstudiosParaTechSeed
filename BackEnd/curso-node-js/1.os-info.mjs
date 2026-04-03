// MODULOS NATIVOS
// const os = require('os')  // esto era antes, ahora ya no se usa :D
import { platform, arch, release, freemem, totalmem, uptime } from 'node:os' // Lo correcto es hacer esto, aunq ambas funcionan, pero se tiene q hacer lo correcto
console.log(platform())
console.log(arch())
// console.log(os.cpus())
console.log(release())

console.log(freemem()/1024/1024)
console.log(totalmem()/1024/1024)

console.log(`uptime: ${uptime/60/60/24}`)