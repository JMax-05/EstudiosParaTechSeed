// const http = require('node:http')

// const server = http.createServer((req, res)=>{
//     console.log('Request received')
//     res.end('Hello Ariadna')
// })

// server.listen(3000, () => {
//     // console.log(`Respondiendo en: http://localhost:${server.address().port}`)
//     console.log(`Respondiendo en: ${server.address().port}`)
// })

// // // // al hacer en el puerto 0, hace en el puerto mas cercano
// // console.log(process.env)

// import picocolors from "picocolors"
const pc = require('picocolors')

console.error(pc.magenta("Error: dividio entre 0"))