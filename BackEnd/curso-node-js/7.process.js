// Objeto process
// console.log(process.argv)

// current work directory
console.log(process.cwd())

const folder = process.argv[2] ?? '.'
console.log(folder)