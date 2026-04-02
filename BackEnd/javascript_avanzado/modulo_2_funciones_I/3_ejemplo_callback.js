const resolverArray = (arr, operacion) => {
    temp = []
    for (let i = 0; i < arr.length; i++) {
        temp.push(operacion(arr[i]))
    }
    return temp
}

array = [1,2,3,4,5,6]

// const suma = n => n + 2
// const resta = n => n - 2
// const multiplicacion = n => n * 2

// console.log(resolverArray(array, suma))
// console.log(resolverArray(array, resta))
// console.log(resolverArray(array, multiplicacion))

console.log(resolverArray(array, n => n + 2))
console.log(resolverArray(array, n => n - 2))
console.log(resolverArray(array, n => n * 2))
console.log(resolverArray(array, n => n % 2 === 0))
console.log("Intento 3")