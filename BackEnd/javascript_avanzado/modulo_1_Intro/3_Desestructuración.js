const book = {
    name: "The Queen Isabell I",
    author: "Anonimo 1",
    age: "1995",
    editorial: "Lumbreras xd",
    dogs: ["Lucky", "Wapa"]
}

const {name, author, age, editorial} = book;

console.log(name)
console.log(author)

const cousins = [2,3,5,7,11,13,17,19]
const [firstNum, secondNum] = cousins;

console.log(firstNum)

const {dogs: [dog1, dog2]} = book;

console.log(`${dog1} loco y la ${dog2} loca`)