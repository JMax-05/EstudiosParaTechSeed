import User from './user.js'
export default class Admin extends User {
    description(user) {
        console.log(`Usuario: ${user.name}`)
    }
    newName(user, newname){
        user.name = newname
    }
    newAge(user, newage){
        user.age = newage
    }
}