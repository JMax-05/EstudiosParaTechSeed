const test = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) {
            throw new Error("Error de conexion")
        }
        const data = await res.json();
        const completes = data.filter(n => n.completed)
        console.log(completes)
    } catch (err) {
        console.log(`Error: ${err.message}`)
    }
}
test()