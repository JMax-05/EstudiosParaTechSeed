const fs = require('node:fs')
const position = 'C:\\JeanMax\\Proyectos Personales\\TechSeed - Esdras\\Estudios para TechSeed\\BackEnd\\curso-node-js'
fs.readdir(position, (err, dir) => {
    if(err){
        console.error(`Error: ${err}`)
        return;
    }
    dir.forEach(n=>console.log(n))
})