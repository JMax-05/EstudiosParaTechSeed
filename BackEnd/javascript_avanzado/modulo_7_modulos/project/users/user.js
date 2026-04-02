export default class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`Hi, my name is ${this.name}`)
    }
    birthday(){
        return 2026 - this.age;
    }
}