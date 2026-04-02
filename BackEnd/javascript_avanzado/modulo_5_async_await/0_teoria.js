// https://jsonplaceholder.typicode.com/todos
async function test() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
            throw new Error("Error de conexion")
        }
        const data = await res.json();
        // console.log(data)
        const names = data.map(e => e.name)
        console.log(names)
    } catch (err) {
        console.log(`Error: ${err}`);
    }
}

test();