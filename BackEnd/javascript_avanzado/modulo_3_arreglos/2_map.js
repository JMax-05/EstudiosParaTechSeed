const estudiantes = [
    { nombre: "Ana", nota: 18, curso: "Programación" },
    { nombre: "Beto", nota: 10, curso: "Diseño" },
    { nombre: "Carlos", nota: 15, curso: "Programación" },
    { nombre: "Daniela", nota: 8, curso: "Programación" },
    { nombre: "Esteban", nota: 12, curso: "Diseño" }
];

const newEstudents = estudiantes.map(e => e.curso = "Matemáticas")

console.log(estudiantes)