const validarRegistro = (user, regla) => regla(user) ? "Registro exitoso" : "Registro rechazado"

const user1 = {
    name: "Ariadna",
    age: 18
}

const user2 = {
    name: "Maxito",
    age: 17
}

const validar = user => user.age >= 18

// console.log(validarRegistro(user1, validar))
// console.log(validarRegistro(user2, validar))

console.log(validarRegistro(user1, u => u.age >= 18))