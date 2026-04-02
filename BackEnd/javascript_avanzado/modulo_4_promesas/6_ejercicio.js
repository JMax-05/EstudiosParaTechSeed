// Login de Usuario: Simula un login. Una promesa busca al usuario por username. Si lo encuentra, la siguiente promesa verifica si la password es correcta. Si falla el usuario, no debe intentarse verificar la contraseña.
const Users = [
        {
            username: "Maxito",
            password: "72928913TR"
        },
        {
            username: "Ariadna",
            password: "29052006"
        }
    ]
const searchUser = username => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = Users.find(u => u.username === username);
            if (user) {
                resolve(user)
            } else {
                reject("Usuario no encontrado");
            }
        }, 2000)
    })
}
const searchPassword = (user, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.password===password) {
                resolve("Acceso concedido")
            } else {
                reject(`Contraseña equivocada`)
            }
        }, 2000)
    })
}
searchUser("Ariadna")
    .then(e => {
        console.log(`Usuario ${e.username} encontrado`)
        return searchPassword(e, "29052006")
    })
    .then(e => {
        console.log(e)
    })
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => console.log(`User buscado`))
