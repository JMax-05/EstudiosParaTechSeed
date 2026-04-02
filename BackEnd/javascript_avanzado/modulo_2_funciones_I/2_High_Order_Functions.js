//callbacks
const suma = (n,m)=>{return n+m}
const resta = (n,m)=>{return n-m}
const multiplicar = (n,m)=>{return n*m}

const operaMatematica = (x, y, operacion)=>{return operacion(x,y)}

console.log(operaMatematica(10, 5, suma))
console.log(operaMatematica(10, 5, resta))
console.log(operaMatematica(10, 5, multiplicar))