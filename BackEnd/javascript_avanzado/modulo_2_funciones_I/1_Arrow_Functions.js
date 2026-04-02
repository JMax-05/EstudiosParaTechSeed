// normal
function sum(num1, num2) {
    return num1 + num2;
}
// arrow function
const suma = (n, m) => {return n+m}

console.log(sum(1,2))
console.log(suma(1,2))

const plus_2 = n => n*2;
//con una sola variable se puede crear una arrow function sin usar return

console.log(plus_2(5))