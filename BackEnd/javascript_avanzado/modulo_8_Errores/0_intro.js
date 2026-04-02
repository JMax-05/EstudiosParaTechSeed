function divide(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero")
    }
    return a/b
}
console.log(divide(1,0))