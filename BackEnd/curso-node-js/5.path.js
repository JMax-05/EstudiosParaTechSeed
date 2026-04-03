import path from 'node:path'

console.log(path.sep)

const ruta1 = 'project'
const ruta2 = 'js'
const ruta3 = 'Ejercicios1'

const rutas = path.join(ruta1, ruta2, ruta3)

console.log(rutas)

const rutabase = path.basename(`${rutas}\\maxito\\max.txt`)

console.log(rutabase)

const rutabase_sin_extension = path.basename(rutabase, '.txt')
console.log(rutabase_sin_extension)

const extencion = path.extname(rutabase)
console.log(extencion)