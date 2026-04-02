// --- DESAFÍO 1: Variables y Template Strings ---
const curso = "Node.js";
let docente = "Profesor X"; // Cambia esto por tu nombre
// TAREA: Crea una frase que diga: "Bienvenido al curso de [curso], mi nombre es [docente]" usando Template Strings.

let phrase = `Welcome to course of ${curso}, my name is ${docente}`;

// --- DESAFÍO 2: Desestructuración ---
const configuracionServidor = {
    puerto: 3000,
    db: "MongoDB",
    usuario: "admin",
    version: "1.2.0"
};

// TAREA: Extrae 'puerto' y 'db' en variables independientes usando desestructuración en una sola línea.
const {puerto, db} = configuracionServidor;

// --- DESAFÍO 3: Operador Spread ---
const notasTrimestre1 = [15, 18, 12];
const notasTrimestre2 = [20, 14, 16];

// TAREA: Crea un nuevo arreglo llamado 'todasLasNotas' que combine ambos arreglos usando el operador Spread.
// Luego, añade una nota extra (ej: 10) al final de ese nuevo arreglo.
const todasLasNotas = [...notasTrimestre1, ...notasTrimestre2, 10, 15];


// --- DESAFÍO FINAL: El Objeto de Estudiante ---
const estudiante = {
    nombre: "Max",
    materia: "Matemáticas",
    datos: {
        colegio: "San Agustín",
        ubicación: "Barranca"
    }
};

// TAREA: 
// 1. Desestructura 'colegio' (está anidado).
const {datos: {colegio}} = estudiante;
// 2. Crea una copia del objeto 'estudiante' llamada 'estudianteActualizado'.
const estudianteActualizado = {...estudiante};
// 3. En la copia, cambia la materia a "JavaScript" sin modificar el objeto original.
estudianteActualizado.materia = "JavaScript";

console.log(estudianteActualizado)
console.log("--------------------------------")
console.log(estudiante)