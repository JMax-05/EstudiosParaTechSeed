// File System : FL
// const fs = require('node:fs')
import fs from 'node:fs'

const stats = fs.statSync('./archivo.txt')
console.log(stats)

console.log(
    stats.isFile(),
    stats.size,
    stats.isDirectory(),
    stats.isSymbolicLink()
)