const user = {
    name: "Maxito",
    age: 27,
    courses: {
        1: "Math III",
        2: "Programming IV"
    },
    greet(){
        console.log(`Hi, I'm ${this.name}`)
    }
}
// user.greet()
// console.log(user.__proto__)

function User(name){
    this.name = name
}
User.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name}`)
}
const user1 = new User("Ariadna")
// user1.greet()

class Usser {
    constructor(name){
        this.name = name
    }
    greet() {
        console.log(`Hi, I'm ${this.name}`)
    }
}
const user2 = new Usser("Maxito")
user2.greet()