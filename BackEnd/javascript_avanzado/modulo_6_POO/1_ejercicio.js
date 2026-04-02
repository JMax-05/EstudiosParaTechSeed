// Ejercicio 1
const car = {
    brand: "Toyota",
    model: "Carolla",
    year: 2020,
    getInfo() {
        console.log(`${this.brand} ${this.model} ${this.year}`)
    }
}
// car.getInfo()

// Ejercicio 2
function Person(name, age){
    this.name = name
    this.age = age
}
Person.prototype.greet = function (){
    console.log(`Hola, soy ${this.name} y tengo ${this.age}`)
}
const person1 = new Person("Maxito", 27)
// person1.greet()

// Ejercicio 3
class Calculator{
    static suma(a, b) {return a+b}
    static multiply(a, b) {return a*b}
    static isPositive(n) {return (n>0)}
}
// console.log(Calculator.suma(3,5))
// console.log(Calculator.multiply(3,5))
// console.log(Calculator.isPositive(5))
// console.log(Calculator.isPositive(0))
// console.log(Calculator.isPositive(-5))

// // Ejercicio 4
// class User{
//     constructor(name){
//         this.name = name
//     }
//     login(){console.log(`${this.name} logeandose`)}
// }
// class Admin extends User {
//     deleteUser(){console.log(`${this.name} eliminado`)}
// }
// const admin1 = new Admin("Maxito")
// // admin1.login()
// // admin1.deleteUser()

// Ejercicio 5
class Animal{
    constructor(name){
        this.name = name
    }
    makeSound() {console.log("Sonido generico")}
}
class Dog extends Animal {
    makeSound() {
        super.makeSound()
        console.log("Ladrido")
    }
}
const dog1 = new Dog("Lucky")
// dog1.makeSound()

// Ejercicio 6
class User {
    constructor(name){
        this.name = name
        this.permisions = []
    }
    addPermission(permission){
        this.permisions.push(permission)
    }
    showPermissions(){
        console.log(this.permisions)
    }
}
class Admin extends User {
    assignPermission(user, permission){
        user.addPermission(permission)
    }
}
class SuperAdmin extends Admin {
    removePermission(user, permission){
        user.permisions.splice(user.permisions.indexOf(permission), 1)
    }
}
const user = new User("Max");  
const admin = new Admin("Ana");  
const superAdmin = new SuperAdmin("Carlos");  
  
admin.assignPermission(user, "read");  
admin.assignPermission(user, "write");  
  
user.showPermissions(); // ["read", "write"]  
  
superAdmin.removePermission(user, "write");  
  
user.showPermissions(); // ["read"]