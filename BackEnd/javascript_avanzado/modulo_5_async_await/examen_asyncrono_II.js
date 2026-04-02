const API = `https://jsonplaceholder.typicode.com`;
// Pregunta 1: Básico pero clave
const showEmail = async () => {
    try {
        const res = await fetch(`${API}/users`);
        if (!res.ok) {
            throw new Error("Fallo en la conexion");
        }
        const data = await res.json();
        const emails = data.map(e => e.email)
        console.log(emails)
    } catch (err) {
        console.log(`Error: ${err.message}`)
    }
}
// showEmail()

// Pregunta 2: Filtro + transformacion
const consumeAll = async () => {
    try {
        const res = await fetch(`${API}/todos`)
        if (!res.ok) {
            throw new Error("Fallo en la conexion")
        }
        const data = await res.json()
        const completes = data.filter(e => !e.completed).map(e => e.title)
        console.log(completes)
        // console.log(data)
    } catch (err) {
        console.log(`Error: ${err.message}`)
    }
}
// consumeAll()    

// Pregunta 3: Validacion profesional
const getPosts = async () => {
    try {
        const res = await fetch(`${API}/posts`);
        if (!res.ok) {
            throw new Error("Error en la conexion")
        }
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(`Error: ${err.message}`)
    }
}
// getPosts()

// Pregunta 4: Encadenamiento Real
const encadenamientoReal = async () => {
    try {
        const resUser = await fetch(`${API}/users`);
        if (!resUser.ok) {
            throw new Error("Fallo en la conexion");
        }
        const dataUser = await resUser.json(); // aqui estan todos los usuarios

        const resPost = await fetch(`${API}/posts`);
        if (!resPost.ok) {
            throw new Error("Fallo en la conexion");
        }
        const dataPost = await resPost.json(); // aqui estan todos los posts

        const firstUser = dataUser.filter(n => n.UserId === 1)
        const firstUserPosts = dataPost.filter(n => n.id === 1)
        console.log(firstUserPosts)
    } catch (err) {
        console.log(`Error: ${err.message}`)
    }
}
// encadenamientoReal()

// Pregunta 5: Nivel Alto
const test = async () => {
    try {
        const response = await fetch(`${API}/users`)
        if (!response.ok) {
            throw new Error("Error de conexion")
        }
        const data = await response.json(); // contiene los datos --> hay solo 10 datos
        const dataUsers = data.map(e => e.username)
        const ids = data.map(e => e.id)
        let UserPost = []
        for (let i = 0; i < ids.length; i++) {
            const peticion = await fetch(`${API}/posts?userId=${ids[i]}`)
            if (!peticion.ok) {
                throw new Error(`Error de conexion`);
            }
            const dataPeticion = await peticion.json() // contiene los userId
            // console.log(dataPeticion)
            UserPost.push({
                Usuario: dataUsers[i],
                Posts: dataPeticion.length
            })
        }
        console.log(UserPost[9])
        // console.log("----------------")
        // console.log(data)
        // const numUsers = data.filter(e => e).length;
        // console.log(numUsers)
        // console.log(ids)

    } catch (err) {
        console.log(`Error: ${err.message}`)
    }
}
// test() //No me sale esta, pipipi

// Pregunta 6: Errores controlados
async function another() {
    try {
        const res = await fetch(`${API}/another`)
        if(!res.ok){
            throw new Error("No se pudo conectar a la API")
        }
    } catch (err) {
        console.log(`Error: ${err.message}`)
    }
}
// another()



// Nivel Pro
const Peticion = async () => {
    try {
        const response = await fetch(`${API}/users`)
        if (!response.ok) {
            throw new Error("Error de conexion")
        }
        const data = await response.json(); // contiene los datos --> hay solo 10 datos
        const dataUsers = data.map(e => e.username)
        const ids = data.map(e => e.id)
        let UserPost = []
        for (let i = 0; i < ids.length; i++) {
            const peticion = await fetch(`${API}/posts?userId=${ids[i]}`)
            if (!peticion.ok) {
                throw new Error(`Error de conexion`);
            }
            const dataPeticion = await peticion.json() // contiene los userId
            // console.log(dataPeticion)
            UserPost.push({
                Usuario: dataUsers[i],
                Posts: dataPeticion.length
            })
        }
        console.log(UserPost[9])
        // console.log("----------------")
        // console.log(data)
        // const numUsers = data.filter(e => e).length;
        // console.log(numUsers)
        // console.log(ids)

    } catch (err) {
        console.log(`Error: ${err.message}`)
    }
}
// test() //No me sale esta, pipipi